// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START speech_v1p1beta1_generated_Adaptation_ListCustomClasses_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of custom classes. Format:
   *  `projects/{project}/locations/{location}/customClasses`
   *  Speech-to-Text supports three locations: `global`, `us` (US North America),
   *  and `eu` (Europe). If you are calling the `speech.googleapis.com`
   *  endpoint, use the `global` location. To specify a region, use a
   *  regional endpoint (/speech-to-text/docs/endpoints) with matching `us` or
   *  `eu` location value.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of custom classes to return. The service may return
   *  fewer than this value. If unspecified, at most 50 custom classes will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListCustomClass` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListCustomClass` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Speech library
  const {AdaptationClient} = require('@google-cloud/speech').v1p1beta1;

  // Instantiates a client
  const speechClient = new AdaptationClient();

  async function callListCustomClasses() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await speechClient.listCustomClassesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListCustomClasses();
  // [END speech_v1p1beta1_generated_Adaptation_ListCustomClasses_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));