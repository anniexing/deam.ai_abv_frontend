import { FC, MouseEvent } from "react";
import { Beer } from "../../models/Beer";
import Pagination from "react-bootstrap/Pagination";

const BeerPagination: FC<{
  items: Beer[];
  current: number;
  getActivePage: (page: number) => void;
}> = ({ items, current, getActivePage }) => {
  const handleOnChangePage = (event: MouseEvent) => {
    event.preventDefault();
    const value = event.currentTarget.innerHTML;
    if (value) {
      getActivePage(parseInt(value));
    }
  };
  return (
    <>
      <Pagination>
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === current}
              onClick={(event: MouseEvent) => handleOnChangePage(event)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
      </Pagination>
    </>
  );
};
export default BeerPagination;
