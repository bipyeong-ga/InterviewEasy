import { Link, type LinkProps } from "react-router"
import React from "react"

const BlockLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ style, children, ...props }, ref) => (
        <Link
            ref={ref}
            className="block-link"
            style={{ display: "block", ...style }}
            {...props}
        >
            {children}
        </Link>
    ),
)

BlockLink.displayName = "BlockLink"

export default BlockLink
