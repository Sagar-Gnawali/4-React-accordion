import React, { useState } from 'react'
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
const myStyles = makeStyles({
    button: {
        borderRadius: '50%',
        height: '60px',
        width: '1px'
    }
})
const ShowData = ({ id, title, info }) => {
    const [change, setChange] = useState(false);
    const classes = myStyles();
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <Button onClick={() => setChange(!change)} className={classes.button} color="primary" >{change ? <FiMinusCircle fontSize="30" /> : <FiPlusCircle fontSize="30" />}</Button>
            </header>
            <p>{change ? info : null}</p>
        </article>
    )
}
export default ShowData;