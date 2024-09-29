import { StylesConfig } from "react-select";                

const selectStyles: StylesConfig = {
    control: (original,state) => ({
        ...original,
        backgroundColor:"#F9EEE7",
        borderColor: state.isFocused ? "#0E8173" : "#403F4C",
        boxShadow: state.isFocused ? "0 0 0 1px #0E8173" : "2px #403F4C",
        "&:hover": {
          borderColor: state.isFocused ? "#0E8173" : "#1e293b",
        },
        borderRadius: "10px",
    }),
    option: (original, state) => ({
        ...original,
        backgroundColor: state.isSelected ? "#E4D7CF" :"#F9EEE7",
        "&:hover": {backgroundColor:"#E4D7CF"},
        color: "#403F4C",
    })
};

export default selectStyles;