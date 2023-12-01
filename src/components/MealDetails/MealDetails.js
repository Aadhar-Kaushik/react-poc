import classes from "./MealDetails.module.css"

const MealDetails = () => {

    return <div className={classes.table}>

        <table>
            <tr>
                <th>Parameter</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>ID</td>
                <td>1001</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>Sushi</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>100</td>
            </tr>
        </table>
    </div>
}

export default MealDetails