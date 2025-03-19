function renderFooter() {
    console.log("Rendering footer...");

    const footerElement = document.createElement("footer");
    footerElement.className = "footer-container";

    const logo = document.createElement("img");
    logo.src = "logo.png";
    logo.alt = "Company Logo";
    footerElement.appendChild(logo);

    const nav = document.createElement("nav");
    const links = ["Home", "About", "Services", "Contact", "Privacy Policy", "Terms of Service"];
    links.forEach(text => {
        const link = document.createElement("a");
        link.href = `/${text.toLowerCase().replace(/\s+/g, '-')}`;
        link.textContent = text;
        nav.appendChild(link);
    });
    footerElement.appendChild(nav);

    const socialMedia = document.createElement("div");
    const socialLinks = ["Facebook", "Twitter", "Instagram", "LinkedIn"];
    socialLinks.forEach(platform => {
        const icon = document.createElement("span");
        icon.className = `icon-${platform.toLowerCase()}`;
        icon.textContent = platform;
        socialMedia.appendChild(icon);
    });
    footerElement.appendChild(socialMedia);

    const copyright = document.createElement("p");
    copyright.textContent = `© ${new Date().getFullYear()} MyCompany. All Rights Reserved.`;
    footerElement.appendChild(copyright);

    document.body.appendChild(footerElement);
}
