# poc-influxdb-cypress

**NOTE** - postponing this POC, because of unstable headless test run results.  First smoke test failed to return the same results reliably.  Every fifth or sixth test run threw an element not clickable exception like the following: 

```
<failure message="Timed out retrying: cy.click() failed because this element is not visible:

&lt;button class=&quot;button button-lg button-primary&quot; title=&quot;Get Started&quot; tabindex=&quot;0&quot; type=&quot;button&quot; data-testid=&quot;onboarding-get-started&quot;&gt;...&lt;/button&gt;

This element &apos;&lt;button.button.button-lg.button-primary&gt;&apos; is not visible because it has an effective width and height of: &apos;0 x 0&apos; pixels.

Fix this problem, or use {force: true} to disable error checking.

https://on.cypress.io/element-cannot-be-interacted-with" type="CypressError"><![CDATA[CypressError: Timed out retrying: cy.click() failed because this element is not visible:

<button class="button button-lg button-primary" title="Get Started" tabindex="0" type="button" data-testid="onboarding-get-started">...</button>

This element '<button.button.button-lg.button-primary>' is not visible because it has an effective width and height of: '0 x 0' pixels.

Fix this problem, or use {force: true} to disable error checking.

https://on.cypress.io/element-cannot-be-interacted-with
    at Object.cypressErr (http://localhost:9999/__cypress/runner/cypress_runner.js:84963:11)
    at Object.throwErr (http://localhost:9999/__cypress/runner/cypress_runner.js:84916:18)
    at Object.throwErrByPath (http://localhost:9999/__cypress/runner/cypress_runner.js:84947:17)
    at Object.retry (http://localhost:9999/__cypress/runner/cypress_runner.js:77960:16)
    at retryActionability (http://localhost:9999/__cypress/runner/cypress_runner.js:69435:19)
    at tryCatcher (http://localhost:9999/__cypress/runner/cypress_runner.js:134216:23)
    at Function.Promise.attempt.Promise.try (http://localhost:9999/__cypress/runner/cypress_runner.js:131590:29)
    at tryFn (http://localhost:9999/__cypress/runner/cypress_runner.js:78349:24)
    at whenStable (http://localhost:9999/__cypress/runner/cypress_runner.js:78377:12)
    at http://localhost:9999/__cypress/runner/cypress_runner.js:77984:16
    at tryCatcher (http://localhost:9999/__cypress/runner/cypress_runner.js:134216:23)
    at Promise._settlePromiseFromHandler (http://localhost:9999/__cypress/runner/cypress_runner.js:132234:31)
    at Promise._settlePromise (http://localhost:9999/__cypress/runner/cypress_runner.js:132291:18)
    at Promise._settlePromise0 (http://localhost:9999/__cypress/runner/cypress_runner.js:132336:10)
    at Promise._settlePromises (http://localhost:9999/__cypress/runner/cypress_runner.js:132415:18)
    at Promise._fulfill (http://localhost:9999/__cypress/runner/cypress_runner.js:132360:18)]]></failure>
```

*Headed* test runs seem to be stabler.  Always passed all tests. 
