import Link from "next/link";
import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.hasShadow) className.push(props.hasShadow);

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isLoading || props.isDisabled) {
    if (props.isDisabled) {
      className.push("bg-gray200");
    }
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="animate-spin h-5 w-5 mr-3"></span>
            <span className="text-sm">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isEkternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link href={props.href}>
          <a className={className.join(" ")} style={props.style}>
            {props.children}
          </a>
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  className: propTypes.string,
  isLoading: propTypes.bool,
  isDisabled: propTypes.bool,
  hasShadow: propTypes.bool,
  isEkternal: propTypes.bool,
  children: propTypes.string,
};
