import React from "react";
import { ButtonGroup, Button, Select } from "@chakra-ui/react";
const Pagination = ({ page, setPage, limit, setLimit, totalCount }) => {
  return (
    <ButtonGroup mt="4">
      <Button
        pl={6}
        pr={6}
        disabled={page <= 1}
        data-cy="pagination-first-button"
        onClick={() => setPage(1)}
      >
        First
      </Button>
      <Button
        pl={6}
        pr={6}
        disabled={page <= 1}
        data-cy="pagination-previous-button"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option data-cy="pagination-limit-3" value={3}>
          3
        </option>
        <option data-cy="pagination-limit-6" value={6}>
          6
        </option>
        <option data-cy="pagination-limit-9" value={9}>
          9
        </option>
      </Select>
      <Button
        pl={6}
        pr={6}
        disabled={totalCount <= page * limit}
        data-cy="pagination-next-button"
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
      <Button
        pl={6}
        pr={6}
        disabled={totalCount <= page * limit}
        data-cy="pagination-last-button"
        onClick={() => setPage(Math.ceil(totalCount / limit))}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
