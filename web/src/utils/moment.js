import Moment from "moment";
import "moment/locale/pt-br";

import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);
moment.locale("pt-br");

export default moment;
