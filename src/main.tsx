import { observer } from "mobx-react-lite"
import React from "react"
import { render } from "react-dom"

const GUI = observer<{}>(() => {
	return <div>hi</div>
})
render(<GUI />, document.getElementById("root"))
