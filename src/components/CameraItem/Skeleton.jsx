import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={242}
        height={381}
        viewBox="0 0 242 381"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="242" height="242"/>
        <rect x="16" y="254" rx="0" ry="0" width="208" height="20"/>
        <rect x="16" y="286" rx="0" ry="0" width="66" height="22"/>
        <rect x="189" y="289" rx="0" ry="0" width="37" height="16"/>
        <rect x="16" y="326" rx="8" ry="8" width="106" height="37"/>
        <circle cx="216" cy="344" r="10"/>
    </ContentLoader>
)

export default Skeleton