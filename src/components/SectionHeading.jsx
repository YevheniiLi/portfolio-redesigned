import PropTypes from "prop-types";

const SectionHeading = ({ id, label, title, children, align = "left" }) => (
  <div className={`section-heading section-heading--${align}`}>
    <p className="section-heading__label">{label}</p>
    <h2 id={id}>{title}</h2>
    {children && <div className="section-heading__copy">{children}</div>}
  </div>
);

SectionHeading.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  align: PropTypes.oneOf(["left", "center"]),
};

SectionHeading.defaultProps = {
  id: undefined,
  children: null,
  align: "left",
};

export default SectionHeading;
