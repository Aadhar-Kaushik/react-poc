import classes from "./FlexBox.module.css"
// CODE HELP -> https://labs.thecodehelp.in/fruitbox-flex
const FlexBox = () => {

    return <div className={classes.container}>
        <div className={classes["box"]} id={classes["box1"]}>Box 1</div>
        <div className={classes["box"]} id={classes["box2"]}>Box 2</div>
        <div className={classes["box"]} id={classes["box3"]}>Box 3</div>
        <div className={classes["box"]} id={classes["box4"]}>Box 4</div>

    </div>
}

export default FlexBox