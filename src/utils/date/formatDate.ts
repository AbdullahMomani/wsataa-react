import moment from 'moment';

export const formatDate = (date : string)=>{
    const formattedDate = moment(date).format('MMMM DD, YYYY');
    return formattedDate

}