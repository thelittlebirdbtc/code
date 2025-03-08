'use client';

import { redirect } from "next/navigation";

export async function deleteJob() {

    const jobId = "?";

    const response = await fetch(`https://apis.codante.io/api/job-board/jobs/${jobId}`, {
        method: "DELETE",
    },
);

if (!response.ok) {
    throw new Error("Failed to delete job");
}

redirect("/vagas");

}