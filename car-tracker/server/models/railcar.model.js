import { model, Schema } from 'mongoose';

const railcarType = ['Autorack', 'Boxcar', 'Caboose', 'Centerbeam', 'Covered Hopper', 'Coil Car', 'Flatcar', 'Gondola', 'Intermodal', 'Hopper', 'MOW', 'Passenger', 'Refrigerator', 'Tank Car', 'Well Car', 'Other']

const railcarSchema = new Schema(
    {
        prefix: {
            type: String,
            required: [true, "Car prefix is required!"],
            minlength: [2, "Prefix must be at least two characters long!"],
            maxlength: [10, "Prefix must be less than ten characters long"]
        },
        number: {
            type: Number,
            required: [true, "car number is required!"],
            min: [1, "Car number must be greater than 0!"]
        },
        type: {
            type: String,
            enum: railcarType,
            required: [true, "Car type must be selected"]
        },
        location: {
            type: String,
            required: [true, "Car location is required!"],
            minlength: [2, "Location must be at least two characters long!"],
            maxlength: [255, "Location must be less than 255 characters long"]
        },
        features: {
            type: String,
            required: [true, "Car features is required!"],
            minlength: [2, "Features must be at least two characters long!"],
            maxlength: [255, "Features must be less than 255 characters long"]
        },
        modifications: {
            type: String,
            required: [true, "Car modifications is required!"],
            minlength: [2, "Modifications must be at least two characters long!"],
            maxlength: [255, "Modifications must be less than 255 characters long"]
        },
        loaded: {
            type: Boolean,
            requred: [true, 'Load status is required']
        }
    },
    { timestamps: true }
);
const Railcar = model("Railcar", railcarSchema);
export default Railcar;
