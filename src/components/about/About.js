import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setScreenName } from "../../ui/redux/actions"

const About = props => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setScreenName("ABOUT"))
    }, [])

    return <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat tincidunt eros, vel lobortis nisl sollicitudin eu. In non vehicula nulla, faucibus rhoncus justo. Cras auctor lobortis enim, nec interdum metus dignissim ac. Aliquam erat volutpat. Etiam viverra, felis id euismod faucibus, diam quam euismod est, et blandit eros nunc non dui. Integer vestibulum ornare nisi vel aliquet. Maecenas quis elit lobortis enim convallis posuere. Nunc iaculis egestas nisl, sed gravida tellus elementum eget. Morbi ut lorem velit. Proin dolor enim, gravida quis accumsan eu, vestibulum porttitor ligula. Proin a libero a elit malesuada laoreet. Aenean tortor ligula, lobortis a varius consequat, porttitor at nibh. Praesent ac bibendum ante. Phasellus sollicitudin erat vitae tortor luctus, quis accumsan justo maximus.</p>

        <p>Integer dapibus accumsan lorem, non sollicitudin dolor congue at. Phasellus porttitor id nibh quis consequat. Nam id nunc pretium, scelerisque eros at, convallis justo. Donec placerat hendrerit risus, sed cursus risus consectetur ut. Aliquam erat volutpat. Ut sit amet aliquet nisi. Cras elementum mauris quis gravida varius. Morbi molestie, elit in rhoncus aliquet, felis elit aliquet velit, non porttitor felis neque et tellus. Pellentesque eu erat placerat, faucibus urna vitae, ullamcorper urna. Curabitur vel laoreet ipsum.</p>

        <p>Vivamus leo velit, finibus quis posuere et, tempor ut felis. Sed massa massa, accumsan non aliquet vitae, congue nec eros. Nullam id rhoncus elit. Vestibulum et faucibus purus, et fermentum nulla. Sed vel felis ante. Donec placerat, tortor sit amet dapibus iaculis, nulla massa iaculis nisl, sed egestas enim magna in nulla. Etiam vitae justo efficitur, faucibus justo sit amet, condimentum enim.</p>
    </div>
}

export default About