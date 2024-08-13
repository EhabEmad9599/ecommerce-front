import { ReactNode } from 'react';
import { Row , Col} from 'react-bootstrap';

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => ReactNode
}

type HasId = {id?: number};

export const GridList = <T extends HasId>({records, renderItem}: GridListProps<T>) => {

  const categoriesList =
  records.length > 0
    ? records.map((record) => (
        <Col
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    : "there are no categories";

  return (
    <Row>
    {categoriesList}
  </Row>
  )
}
