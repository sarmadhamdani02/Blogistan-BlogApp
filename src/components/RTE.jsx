import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <>
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <Controller
          name={name || "Content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
            apiKey= "k03iqiwpcbweyh8nbz391ud7mizezd2lq08qteklq0arxe6l"

              initialValue={defaultValue}
              init={{
                apiKey: "k03iqiwpcbweyh8nbz391ud7mizezd2lq08qteklq0arxe6l",
                initialValue: { defaultValue },
                height: 300,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],
                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </>
  );
}
