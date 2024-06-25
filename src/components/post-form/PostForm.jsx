import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostForm = (post) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "draft",
      },
    });

  const submit = async (data) => {
    if (post) {
      
    } 
    else {
    }
  };

  return <div>PostForm</div>;
};

export default PostForm;
