'use client';

import { redirect } from "next/navigation";

export async function deleteJob(formData: FormData) {

    const jobId = formData.get("id");

    const response = await fetch(`https://apis.codante.io/api/job-board/jobs/${jobId}`, {
        method: "DELETE",
    },
);

if (!response.ok) {
    throw new Error("Failed to delete job");
}

redirect("/vagas");

}

export async function createJob(formData: FormData) {
    
    const response = await fetch("https://apis.codante.io/api/job-board/jobs", {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to create job");
    }

    redirect("/vagas");
}