import { Fragment } from "react"

const SectionTitle = ({
  title,
  subtitle1 = "One site",
  subtitle2 = "most popular experience you’ll remember",
  bg,
}) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>
        {subtitle1 && subtitle1} {subtitle2 && subtitle2}
      </p>
    </Fragment>
  )
}
export default SectionTitle
