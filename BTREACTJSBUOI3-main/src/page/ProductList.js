import React, { Component } from 'react'

export default class ProductList extends Component {
    renderProducItem = () => {
        console.log(this.props)
        let { productData, setStateModal } = this.props
        return productData.map((item) => {
            return <div className="col-4" key={item.id} data-toggle="modal" data-target="#exampleModal">
                <div onClick={() => { setStateModal(item) }} className="card mb-3">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price}$</p>
                        <a href="#"
                            className="btn btn-dark">Add Cart</a>
                    </div>
                </div>
            </div >
        })
    }
    render() {
        return (
            <div className='row'>{this.renderProducItem()}</div>
        )
    }
}
