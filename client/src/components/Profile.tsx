import {
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
  MapPinnedIcon,
  Plus,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useUserStore } from "@/store/useUserStore";
import profileImage from "@/assets/profile.png";

const Profile = () => {
  const { user, updateProfile } = useUserStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [profileData, setProfileData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "",
    profilePicture: user?.profilePicture || "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>(profileData.profilePicture || "");

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateProfile(profileData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5 px-4">

        <div className="flex justify-left mb-8">
          <img
            src={profileImage}
            alt="Lazeez Diet profile image"
            className="w-400 h-auto rounded-xl"
          />
        </div>

      {/* CENTERED CONTAINER INCLUDING AVATAR + NAME */}
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
        <div className="relative">
          <Avatar className="md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
            <input
              ref={imageRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
        </div>

        <Input
          type="text"
          name="fullname"
          value={profileData.fullname}
          onChange={changeHandler}
          placeholder="Full Name"
          className="text-2xl font-bold outline-none border-none focus-visible:ring-transparent text-center w-full"
        />
      </div>

      {/* FORM FIELDS */}
      <div className="grid grid-cols-1 gap-4 my-10 max-w-xl mx-auto">
        {[
          {
            label: "Email",
            icon: <Mail className="text-pink-900" />,
            name: "email",
            disabled: true,
          },
          {
            label: "Address",
            icon: <LocateIcon className="text-pink-900" />,
            name: "address",
          },
          {
            label: "City",
            icon: <MapPin className="text-pink-900" />,
            name: "city",
          },
          {
            label: "Country",
            icon: <MapPinnedIcon className="text-pink-900" />,
            name: "country",
            placeholder: "Update your address.."

          },
        ].map((field) => (
          <div
            key={field.name}
            className="flex flex-col gap-2 rounded-lg p-4 bg-purple-500 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Label className="flex items-center gap-2 text-gray-700">
              {field.icon}
              {field.label}
            </Label>
            <input
              disabled={field.disabled}
              name={field.name}
              value={profileData[field.name as keyof typeof profileData]}
              onChange={changeHandler}
              placeholder={field.placeholder}
              className="w-full text-gray-700 bg-white border border-gray-300 rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-400 outline-none transition-all duration-200"
            />
          </div>
        ))}
      </div>

      {/* SUBMIT BUTTON */}
      <div className="text-center">
        {isLoading ? (
          <Button disabled className="bg-purple-500 hover:bg-hoverPurple">
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="bg-purple-500 hover:bg-hoverPurple">
            Update
          </Button>
        )}
      </div>
    </form>


  );
};

export default Profile;
