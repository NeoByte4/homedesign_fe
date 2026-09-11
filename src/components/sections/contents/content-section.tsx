import React from "react";
import HeadingText from "../../ui/heading-text";
import { TiptapDocument, TiptapNode } from "@/src/types/tiptap";

interface Props {
  title: string;
  text?: string;
  htmlContent?: string | TiptapDocument;
}

const renderTiptapNodes = (nodes: TiptapNode[], keyPrefix = "node") =>
  nodes.map((node, index) => {
    const key = `${keyPrefix}-${index}`;
    const children = node.content
      ? renderTiptapNodes(node.content, key)
      : node.text;

    switch (node.type) {
      case "paragraph":
        return (
          <p key={key} className="mb-3">
            {children}
          </p>
        );
      case "heading": {
        const level = node.attrs?.level;
        const className = "font-secondary font-semibold mt-5 mb-3";

        if (level === 2) {
          return (
            <h2 key={key} className={`${className} text-xl`}>
              {children}
            </h2>
          );
        }

        return (
          <h3 key={key} className={`${className} text-lg`}>
            {children}
          </h3>
        );
      }
      case "bulletList":
        return (
          <ul key={key} className="mb-3 list-disc space-y-1 pl-5">
            {children}
          </ul>
        );
      case "orderedList":
        return (
          <ol key={key} className="mb-3 list-decimal space-y-1 pl-5">
            {children}
          </ol>
        );
      case "listItem":
        return <li key={key}>{children}</li>;
      case "hardBreak":
        return <br key={key} />;
      default:
        return <React.Fragment key={key}>{children}</React.Fragment>;
    }
  });

const ContentSection: React.FC<Props> = ({ title, text, htmlContent }) => {
  if (!text && !htmlContent) return null;

  const isTiptapDocument =
    typeof htmlContent === "object" && htmlContent?.type === "doc";

  return (
    <section className="mb-8">
      <HeadingText level={3} className="mb-3">
        {title}
      </HeadingText>

      {text && <div className="text-text-secondary mb-2">{text}</div>}

      {typeof htmlContent === "string" && htmlContent && (
        <div
          className="rich_text_container text-text-secondary"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      )}

      {isTiptapDocument && (
        <div className="rich_text_container text-text-secondary">
          {renderTiptapNodes(htmlContent.content)}
        </div>
      )}
    </section>
  );
};

export default ContentSection;
