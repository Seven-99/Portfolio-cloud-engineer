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

    --Resolution: Corrected the command to: gcloud storage buckets update gs://[BUCKET_NAME] 
    --web-main-page-suffix=index.html.

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

    Exit code 1:

        --Issue: "Could not resolve "./data/projects" from "src/App.jsx"

        --Resolution: Set the correct path for the projects.jsx component.

-Infraestructure as Code (Terraform) 
1.    -Empty directory:

        --Issue: terraform init failed stating the directory was empty.

        --Cause: The command was executed outside the folder containing the .tf configuration files.

        --Resolution: Navigated to the correct subfolder (./terraform) before re-initializing.

2.    -Error 400: User project specified in the request is invalid.

        --Issue: Terrafor failed to refresh the state or import the bucket, resulting in a 400 Bad Request error from the Google API.

        --Cause: The Terraform session lacked the necessary project context. The API could not associate the request with a valid billing or quota project because the GOOGLE_CLOUD_PROJECT environment variable was missing.

        --Resolution: Manually exported the project ID using export GOOGLE_CLOUD_PROJECT=portfolio-479324 and set the default project in the CLI. This allowed the Terraform import and Terraform plan commands to execute successfully.

3.    -State drift and Replacement:

        --Issue: Terraform suggested destroying and recreating the bucket during the first plan.

        --Root Cause: A mismatch between the manually created bucket's location and the LOCATION defined in the .tf configuration. Changing the US region to US-EAST1.

        --Resolution: Attributes in cloud providers (like bucket locations) require precise alignment in the Iac state to avoid accidental resource destruction. 

4.  -Avoidance of Resource Destruction (Infraestructure Alignment)
        
        --Issue: initial Terraform plan indicated that the storage bucket would be destroyed and recreated due to a location mismatch (US  vs US-EAST1).

        --Resolution: Corrected the location parameter in the main.tf to match the existinf infraestructure's region. This shifted the execution plan from a destructive replacement to a safe "Update in-place", ensuring zero downtime and data preservation.

-Incident Management and Debugging 
    
    --Error reporting: Integrated GCP Error Reporting to centralyze and analyze application crashes or API failures.

    --Real-time Notification: Configured a dedicated Notification channel via email to receive instant alerts or uptime failures and critical system errors.  

    --Automated Diagnosis: The setup allows for rapid troubleshooting by providing stack traces and error frequency directly in the monitoring dashboard.

-Infrastructure Observability
    
    --Global Latency Tracking: Real-time line charts agreggating `request_latency` by `checker_location`.
    
    --Uptime Assurance: Automated checks from global nodes to validate a `200 OK` response status.

-Key Skills Demonstrated
    --Google Cloud IAM: key management of Service Account and Github Secrets for a secure deploy.
    --Debugging: Use of the Chrome DevTools and execution logs of github to diagnose failures in real time.
    --Cloud Networking: Static DNS configuration and public access to the buckets. 

-Security Note
    --The Service Account Key is not inside the code, instead it was put it on the Github Secrets.

