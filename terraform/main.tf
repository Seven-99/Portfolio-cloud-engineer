terraform {
  required_providers {
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 5.0"
    }
  }
}

provider "google-beta" {
  project = "cloud-engineer-portfolio-6c9ac"
  region  = "us-east1"
}

resource "google_firebase_hosting_site" "portfolio" {
  provider = google-beta
  project  = "cloud-engineer-portfolio-6c9ac"
  site_id  = "cloud-engineer-portfolio"
}