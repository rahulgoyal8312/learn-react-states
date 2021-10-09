import { useState } from "react"
import ListItem from "./ListItem"

// const item = {
//     id: 0,
//     title: "Title of this Item 1",
//     price: 450,
//     discountedPrice: 340,
//     thumbnail: "placeholder.png"
// }

const Product = () => {
    const [item, setItem] = useState({
        id: 0,
        title: "Title of this Item 1",
        price: 450,
        discountedPrice: 340,
        thumbnail: "placeholder.png"
    })

    const handleInput = event => {
        // console.log(event.target.value, event.target.name)
        setItem({
            ...item,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault();
        if(item.discountedPrice > item.price) {
            alert("Discounted Price cannot be greater than price")
            return;
        }
    }

    return (
        <div className={"product-wrapper"}>
            <div className={"form"}>
                <form onSubmit={submitForm}>
                    <h2>Item Card Details</h2>
                    <div className={"input-field"}>
                        <label htmlFor="title">Title</label>
                        <input 
                            name="title"
                            type="text" 
                            placeholder="Enter Title" 
                            value={item.title} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="price">Price</label>
                        <input 
                            name="price"
                            type="number" 
                            placeholder="Enter Price" 
                            value={item.price} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="discountPrice">Discount Price</label>
                        <input 
                            name="discountedPrice"
                            type="number" 
                            placeholder="Enter Discounted Price" 
                            value={item.discountedPrice} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input 
                            name="thumbnail"
                            type="text" 
                            placeholder="Enter Thumbnail name" 
                            value={item.thumbnail} 
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className={"submit-wrap"}>
                        <button>Update</button>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <ListItem data={item} />
                </div>
            </div>
        </div>
    )
}

export default Product