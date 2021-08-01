import * as React from 'react';
import { compose, withHandlers } from 'recompose';

import HistoryTabDetailComponent from './HistoryTabDetail.component';
import handler from './HistoryTabDetail.container.handler';

export const HistoryTabDetailContainer = props => <HistoryTabDetailComponent {...props}/>;

export default compose(withHandlers(handler))(HistoryTabDetailContainer);
