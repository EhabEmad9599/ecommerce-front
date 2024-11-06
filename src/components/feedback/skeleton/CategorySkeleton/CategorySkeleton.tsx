import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";


export const CategorySkeleton = () => {
  const renderSkeletons = Array(4).fill(0).map((_, idx) => {
    return (
      <Col key={idx} sx={3}>
      <ContentLoader 
        speed={2}
        width={300}
        height={250}
        viewBox="0 0 300 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="9" y="14" rx="8" ry="8" width="235" height="184" /> 
        <rect x="55" y="217" rx="4" ry="4" width="123" height="16" />
      </ContentLoader>
    </Col>
    )

  })
  return (
    <Row>
      {renderSkeletons}
    </Row>
  )
}
