import mongoose, { Document } from "mongoose";

// Define an interface for the User document
interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  address?: string[];
  phone: string;
  usertype: "client" | "admin" | "vender" | "driver";
  profile?: string;
}

// Define the User schema
const userSchema = new mongoose.Schema<IUser>(
  {
    userName: {
      type: String,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    address: {
      type: [String],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    usertype: {
      type: String,
      required: [true, "User type is required"],
      default: "client",
      enum: ["client", "admin", "vender", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://th.bing.com/th/id/R.8bf6e94af7c6e53d8491fdf11aea9033?rik=bwu4WpX3xjHUcg&pid=ImgRaw&r=0",
    },
  },
  { timestamps: true }
);

// Define and export the User model
const User = mongoose.model<IUser>("User", userSchema);
export default User;
