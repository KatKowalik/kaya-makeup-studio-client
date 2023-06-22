import { DateCalendar } from "@mui/x-date-pickers"; 
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from "@mui/material";


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Calendar = ({ handleChangeDate }) => {
  

    return (
        <div className="calendar">
            <ThemeProvider theme={darkTheme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar disablePast={true} sx={{
                        '& .css-nk89i7-MuiPickersCalendarHeader-root': {
                            color: '#FD8263',
                        },
                        '& .css-1w33m67-MuiTypography-root-MuiDayCalendar-weekDayLabel': {
                            color: '#FD8263',
                        },
                        "& .MuiPickersDay-root": {
                            "&.Mui-selected": {
                              backgroundColor: '#FD8263',
                              ':hover': {
                                  backgroundColor: '#FD8263'
                                },
                              ':focus': {
                                backgroundColor: '#FD8263'
                                }
                            },
                          },
                    }} onChange={handleChangeDate}/>
                </LocalizationProvider>
            </ThemeProvider>
        </div>
    )
}

export default Calendar;