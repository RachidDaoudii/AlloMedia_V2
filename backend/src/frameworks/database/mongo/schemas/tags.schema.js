const mongoose = require('mongoose');
const validator = require("validator");

const tagSchema = new mongoose.Schema({
  // Other tag-related fields
    name: {
        type: String,
        required: [true, "tags  of product name is required"],
        unique: [true, "tags  of product name must be unique"],
        index: true,
        lowercase: true,
        trim: true,
        validator: (value) => {
            return validator.isAlpha(value.replace(/\s/g, ""));
        },
    },
    slug: {
        type: String,
        required: [true, "tags  of product slug is required"],
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        validator: (value) => {
            return validator.isAlpha(value.replace(/\s/g, ""));
        }
    },
    status: {
        type: Number,
        required: [true, "tags of product status is required"],
        default: 1,
        Comment: "1 for active and 0 for inactive",
        enum: [0, 1],
        validator: function(value) {
            // Require at least one uppercase le tter, one lowercase letter, one special character and one number
            return validator.isIn(value, [0,1]);
        }
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default:null,
    },
    user_updated: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default:null 
    },
    user_deleted: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        default:null
    },
    items:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Item",
            default:null,
        }
    ]
},{timestamps:true});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;