/* const router = require("express").Router();
const axios = require("axios"); */

/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// [START drive_upload_with_conversion]

/**
 * Upload file with conversion
 * @return{obj} file Id
 * 
export const uploadWithConversion = async () => {
  const fs = require("fs");
  const { GoogleAuth } = require("google-auth-library");
  const { google } = require("googleapis");
  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app
  /*  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/drive",
  }); 
  const auth = axios.post(
    `https://www.googleapis.com//gmail/v1/users/${process.env.GMAIL_USER}/drafts/send`,
    data
  );
  const service = google.drive({ version: "v3", auth });
  const fileMetadata = {
    name: "My Report",
    mimeType: "application/vnd.google-apps.spreadsheet",
  };
  const media = {
    mimeType: "text/csv",
    body: fs.createReadStream("files/report.csv"),
  };

  try {
    const file = await service.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: "id",
    });
    console.log("File Id:", file.data.id);
    return file.data.id;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
};
// [END drive_upload_with_conversion]

module.exports = router; */
