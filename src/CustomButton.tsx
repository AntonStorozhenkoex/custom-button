import React from "react"
import {makeStyles} from '@mui/styles';

interface CustomButtonProps {
    label: string;
    duration: number,
    res:number

}


const useStyles = makeStyles(<Theme,{res:any}>() => ({
    button: {
        position:'relative',
        display:'inline-block',
        width:50,
        height:50,
        borderRadius:'50%'
    },
    buttonSvg: {
        position: 'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height: '100%',
        fill:'red'
    },
    buttonCircle: {
        position: 'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height: '100%',
        fill:'red',
        stroke:'blue',
        strokeWidth:'5px',
        strokeDasharray:'314',
        strokeDashoffset: (res) => 
    }
}));
type MyButtonProps = CustomButtonProps

export const CustomButton: React.SFC<MyButtonProps> = ({label, duration}) => {
    const res:any = 1.25
    const classes: any = useStyles({res})
    let timeOut: any;
    let timeInterval: any;

    const handleClick = () => {
        timeOut = setTimeout(() => alert('Bla-bla'), duration)
        timeInterval = setInterval(()=>{

        },duration/100)
    }

    const handleDown = () => {
        clearInterval(timeInterval)
        clearTimeout(timeOut)
    }


    return (
        <div style={{width: '200px', margin: '100px auto'}}>
            <div className={classes.button} onMouseUp={handleDown} onMouseDown={handleClick}>
                <svg width='50' height='50' viewBox='0 0 50 50' className={classes.buttonSvg}>
                    {label}
                    <circle cx='25' cy='25' r='20' fill='red' className={classes.buttonCircle}></circle>
                </svg>
            </div>
        </div>
    )
}
