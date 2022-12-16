import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { stateModal } = this.props
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src={stateModal.image} style={{ height: "450px" }} alt="" />
                        </div>
                        <div className="modal-body">
                            <h1>{stateModal.name}</h1>
                            <p>{stateModal.description}</p>
                            <h1>{stateModal.price}$</h1>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
