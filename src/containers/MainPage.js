import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as Actions from "../actions"
import LastNewsSlider from "../components/LastNewsSlider"

const MainPage = ({ actions, activePage }) => (
  <div>
    Main Page
    <LastNewsSlider />
  </div>
)

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.router.activePage,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
