import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    console.log(this.props.bands)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand} />
        {/* {this.props.bands.map(band => <Band band={band}/> )} */}

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id})

})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
