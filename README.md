# Aerial Photography Waterford
Website for aerial/drone photography company.

## UX

### Project Goals

The Goal of Waterford Aerial Photography is to create an easy to use, intuitive website that portrays all of the information a potential customer might want in a format that encourages the user to contact/ take the next step towards becoming a customer. The user should be able to easily understand the services provided and have an idea of how their own job may turn out.

There are 2 main roles involved, the goals of the potential customer using the site and the goals of the business.

#### User Goals

* To find out if this business can help them with what they are looking for.
* Easily obtain contact information.
* View samples/examples of previous work.
* A website that works on all devices and screen sizes to easily refer back to.
* Gauge the price of a potential job.
* Find out what kind of equipment is used.

#### Business Goals

* To convert potential customers into customers.
* Provide adequate example images/videos to demonstrate past work and provide high quality RAW samples for download.
* Have contact information readily available and a form to allow contact without leaving the page.
* Engage users immediately and encourage them to browse further.
* Give the customer a clear understanding of what the business does/does not do.
* Provide information about pricing.
* Display equipment/ licences the business uses.

#### User Stories

As a user of Waterford Aerial Photography I want to:

* Easily find contact information.
* View plenty of sample images to get a good understanding of the level of work.
* Clearly understand what the company can/can't help me with.
* Understand the areas in which the company operate geographically.
* Have social media links to get more perspective.
* Be able to easily navigate the site.
* Not be bugged by popups or ads.

### Design Choices

The decision was made to have the site as a single scrolling page with separate content areas. This is due to the relatively modest size of each section and the fact it is easier to scroll than it is to click links. This gives the website a fuller look while also making it easy to navigate.

A simple drone animation effect adds to the overall look and polish of the site.
The site uses lightbox to display different galleries of images to the end use and uses modals and popovers to achieve this.

There is a download section for bulkier files to give the user an idea of final product quality.

A fully working contact form is also included allowing users to email directly. Feedback is provided tot he user in the form of an alert so that they know if they were successful.

All elements that are clickable have css effects to further enhance the user experience.

The main layout is done with bootstrap and minimal css has been added to make the site truly custom.

#### Wireframes
![Mobile](/wireframes/Phone View.png)
![Tablet](/wireframes/ipad View.png)
![Computer](/wireframes/Phone View.png)
## Technologies Used

html
css
javascript
bootstrap
git and github
[Formspree](https://formspree.io/)
[Lightbox](https://lokeshdhakar.com/projects/lightbox2/)


## Testing
Testing was conducted manually using Chrome, Safari and Firefox to check compatibility at all screen sizes.
Tests were also performed using the responsive tools to check how the site responds at various breakpoints.

As the site was being built it was tested along the way to make sure new features were working as intended such as the contact form, contact form validation, download links etc.

It was discovered that github has a 100mb file size limit, this was exceeded during a commit and push and took some navigating to fix.
The flow was:

git reflog
git reset –hard HEAD@{HEAD-NUMBER}
fixing conflicts
git pull
then re-push -f to repair after removing the files that were too large

It was discovered that the 'sticky-top' navbar was stopping at carousel end.
This was fixed by making it fixed-top instead with css.

top: 0;
left: 0;
position: fixed;

Lighthouse used to test page performance.

Css and Html Validated using the check on [w3](https://validator.w3.org/)

A bug was discovered on safari where the lightbox images in a flexbox were far too large. This wasn't visible on chrome or safari and a fixed height value was given to prevent this.

In addition there were minor layout bugs when testing for mobile view sizes.

## Deployment

The site is hosted on the gh-pages branch of the github repository.
To deploy it is recommended that a pull request is made from the main branch to the gh-pages branch as this allows for code review before any changes go live.

## Credits

[Bootstrap docs](https://getbootstrap.com/)  
[Overlay adapted from stackoverflow](https://stackoverflow.com/questions/61297397/position-absolute-top0-bottom-0-right0-left0-and-parent-paddings)  
[Lightbox image gallery](https://lokeshdhakar.com/projects/lightbox2/)  
[All images from [unsplash](https://unsplash.com/) or owned by matt-oc. All images are free to use without attribution for everyone.  
[Google maps code adapted from the docs](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)  
[Scroll anchor offset from stackoverflow](https://stackoverflow.com/questions/1418838/html-making-a-link-lead-to-the-anchor-centered-in-the-middle-of-the-page)  
[Box shadow generator from cssmatic](https://www.cssmatic.com/box-shadow)  
[Inset box shadow from stackoverflow](https://stackoverflow.com/questions/8452739/css-inset-borders)  
[Drone animation adaptation](https://www.w3schools.com/css/css3_animations.asp)  
[Formspree was used for the form](https://formspree.i)  
