import { useState } from "react";
import Tabs from "@/components/Tabs";
import Image from "@/components/Image";
import Field from "@/components/Field";

type SettingsProps = {};

const Settings = ({}: SettingsProps) => {
    const [type, setType] = useState<
        "profile" | "password" | "email" | "notification" | "settings"
    >("profile");
    const [fullName, setFullName] = useState<string>("Tran Mau Tri Tam");
    const [displayName, setDisplayName] = useState<string>("tranmautritam 🔥");
    const [role, setRole] = useState<string>("Sai Gon City, Vietnam");
    const [location, setLocation] = useState<string>("Sai Gon City, Vietnam");
    const [role1, setRole1] = useState<string>("Lead Visual Designer");
    const [team, setTeam] = useState<string>("UI8");
    const [bio, setBio] = useState<string>("Lead Visual Designer at @UI8");

    const typeItems = [
        {
            title: "Profile",
            active: type === "profile",
            onClick: () => setType("profile"),
        },
        {
            title: "Password",
            active: type === "password",
            onClick: () => setType("password"),
        },
        {
            title: "Email",
            active: type === "email",
            onClick: () => setType("email"),
        },
        {
            title: "Notification",
            active: type === "notification",
            onClick: () => setType("notification"),
        },
        {
            title: "Settings",
            active: type === "settings",
            onClick: () => setType("settings"),
        },
    ];

    return (
        <div className="">
            <div className="mb-14 text-h6">Account Settings</div>
            <Tabs
                className="mb-8 md:-mx-8 md:before:w-8 md:after:w-8"
                items={typeItems}
            />
            <div className="mb-8 text-caption-2 text-[#B2B3BD]">
                Your Avatar
            </div>
            <div className="flex items-start">
                <div className="shrink-0 w-16 h-16 mr-10 md:mr-8 md:w-20 md:h-20">
                    <Image
                        className="w-full h-full rounded-full object-cover"
                        src="/images/avatar-1.png"
                        width={64}
                        height={64}
                        alt=""
                    />
                </div>
                <div className="flex space-x-4 md:flex-col md:space-x-0 md:grow">
                    <div className="relative">
                        <button className="btn-primary min-w-[10.5rem] h-10 md:w-full">
                            Upload New
                        </button>
                        <input
                            className="absolute inset-0 opacity-0"
                            type="file"
                        />
                    </div>
                    <button className="btn-grey min-w-[10.5rem] h-10 md:bg-transparent md:hover:bg-transparent">
                        Delete Avatar
                    </button>
                </div>
            </div>
            <div className="-mt-3 pl-[6.5rem] text-[#B2B3BD] md:mt-8 md:pl-0">
                Avatar help your teammates recognize you in Unity.
            </div>
            <form
                className="mt-8 pt-8 border-t border-grey-light dark:border-grey-light/10"
                action=""
                onSubmit={() => console.log("Submit")}
            >
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="Your Full Name"
                        value={fullName}
                        onChange={(e: any) => setFullName(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        label="Display Name"
                        value={displayName}
                        onChange={(e: any) => setDisplayName(e.target.value)}
                        required
                    />
                </div>
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="Role"
                        value={role}
                        onChange={(e: any) => setRole(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        label="Location"
                        value={location}
                        onChange={(e: any) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="flex space-x-4 mb-5 md:block md:space-x-0 md:space-y-5">
                    <Field
                        className="flex-1"
                        label="Role"
                        value={role1}
                        onChange={(e: any) => setRole1(e.target.value)}
                        required
                    />
                    <Field
                        className="flex-1"
                        label="Team"
                        value={team}
                        onChange={(e: any) => setTeam(e.target.value)}
                        required
                    />
                </div>
                <Field
                    className="mb-6"
                    label="Bio"
                    value={bio}
                    onChange={(e: any) => setBio(e.target.value)}
                    textarea
                    required
                />
                <button className="btn-black px-8 md:w-full">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Settings;
