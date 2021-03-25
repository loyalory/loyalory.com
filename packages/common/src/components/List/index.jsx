import styled from 'styled-components';
import { base, theme } from '../../utils';

/**
 * Just a prestyled HTML lists
 */
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  ${base}
  ${theme('List')}
`;

const ListItem = styled.li`
  ${base}
  ${theme('List.Item')}
`;

List.Item = ListItem;

export default List;
