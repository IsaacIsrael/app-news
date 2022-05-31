const queryParamsArray = (params: string[], name:string): string => {
    return params.map((item, index) =>`${name}[${index}]=${item}`).join('&');
};
  
export default queryParamsArray;
  