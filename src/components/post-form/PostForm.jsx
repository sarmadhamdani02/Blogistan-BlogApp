// PostForm.jsx

import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => {

        console.log("state", state)
        console.log("state.auth", state.auth)
        // console.log("state", state)
        
        return state.auth.userData
        
    });

    

    console.log("userData in PostForm:", userData); // Log userData to check its structure and if $id exists

    const submit = async (data) => {
        try {

            console.log("Loading...");
            
            if (post) {
                let file = null;
                if (data.image && data.image[0]) {
                    file = await appwriteService.uploadFile(data.image[0]);
                    // console.log("File after upload:", file);
                }

                if (file) {
                    await appwriteService.deleteFile(post.featuredImage);
                }

                const updateData = {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage,
                };
                console.log("Data for updating post:", updateData);

                const dbPost = await appwriteService.updatePost(post.$id, updateData);
                console.log("Updated post response:", dbPost);

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                let file = null;
                if (data.image && data.image[0]) {
                    file = await appwriteService.uploadFile(data.image[0]);
                    console.log("File after upload:", file);
                }

                if (file) {
                    const fileId = file.$id;
                    data.featuredImage = fileId;
                    const createData = {
                        ...data,
                        userId: userData.$id,
                    };
                    console.log("Data for creating post:", createData); // {content fi image slug statue title userId}
                    console.log("Content Type", typeof(createData.content)); // {content fi image slug statue title userId}

                    const dbPost = await appwriteService.createPost(createData);
                    console.log("Created post response:", dbPost);

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    }
                }
            console.log("Uploaded");

            }
        } catch (error) {
            console.error("Error in submit function:", error);
            // Handle error appropriately, such as displaying an error message
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Upload"}
                </Button>
            </div>
        </form>
    );
}