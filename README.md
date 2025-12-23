Cloud Engineer portfolio & Web Development

Project Overview

This project is a professional portfolio designed to showcase skills in Web Development and Google Cloud Platform (GCP). It features an interactive terminal that simulates the Google Cloud SDK environment.

Architecture and Tech Stack
-Frontend: Built with React 18, Tailwind CSS, and Vite for optimized performance and modern UI.

-Hosting: Hosted on Google Cloud Storage (GCS) as a static website.

-CI/CD: Implemented a CI/CD pipeline via GitHub Actions for continuous deployment.

Detailed Troubleshooting and Root Cause Analysis (RCA)
This section document the technical challenges surpassed during the deploy, demostrating analythic capacity for the technical support.

1. Infraestructure and Cloud CLI
-Incorrect Web Configuration
    --Issue: Failed to configure the bucket as a static website.
    --Root Cause: Missing double hyphens (--) in the web-main-page-suffix argument.
    --Resolution: Corrected the command to: gcloud storage buckets update gs://[BUCKET_NAME] --web-main-page-suffix=index.html.

-Access Denied (403 forbidden)
    --Issue: Website was inaccessible (403 error).
    --Resolution: Assigned the Storage Object Viewer role to allUsers to enable public read access.

2. Frontend & and Build Optimization
-Asset Path Mismatch
    --Issue: Scripts and styles failed to load because the browser searched in the root directory instead of the bucket subfolder.
    --Resolution: Configured the base property in vite.config.js to use relative paths (./).

-Vite Configuration Sintax
    --Issue: ReferenceError: base is not defined.
    --Root Cause: The base property was incorrectly placed inside the plugins array.
    --Resolution: Refactored vite.config.js to correctly structure the configuration object.

-CI/CD Pipeline
    -Build Failure: The npm run build command failed due to inherited syntax errors in the configuration files.
    -Directory Context Error:
        --Issue: GitHub Actions couldn't find package.json.
        --Resolution: Set the working-directory: ./react in the workflow YAML to ensure the pipeline runs in the correct folder.

-Key Skills Demonstrated
    -Google Cloud IAM: key management of Service Account and Github Secrets for a secure deploy.
    -Debugging: Use of the Chrome DevTools and execution logs of github to diagnose failures in real time.
    -Cloud Networking: Static DNS configuration and public access to the buckets. 

-Security Note
    -The Service Account Key is not inside the code, instead it was put it on the Github Secrets.

