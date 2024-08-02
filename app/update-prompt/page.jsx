"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "../_components/Form";
import Loading from "../loading";

function EditPromptComponent() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(
    function () {
      async function getPromptDetails() {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();

        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      }

      if (promptId) getPromptDetails();
    },
    [promptId]
  );

  async function updatePrompt(e) {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
}

export function EditPrompt() {
  return (
    <Suspense fallback={<Loading />}>
      <EditPromptComponent />
    </Suspense>
  );
}

export default EditPrompt;
