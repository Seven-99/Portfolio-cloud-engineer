resource "google_storage_bucket" "portfolio" {
    name = "cloud-engineer-portfolio"
    location = "US-EAST1"
    force_destroy = true

    website {
    main_page_suffix = "index.html"
    not_found_page = "index.html"
    }
}

resource "google_storage_bucket_iam_member" "public_access" {
    bucket = google_storage_bucket.portfolio.name
    role = "roles/storage.objectViewer"
    member = "allUsers"
}

