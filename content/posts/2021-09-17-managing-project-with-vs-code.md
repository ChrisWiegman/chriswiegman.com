---
title: Managing Projects with VS Code
type: post
date: 2021-09-17T14:38:54+00:00
url: /2021/09/managing-project-with-vs-code/
featured_image: /images/2021/09/managing-project-with-vs-code.png
categories:
  - Technical
tags:
  - Development Tools
  - VS Code
  - Web Development

---
One of the biggest strengths of [VS Code][1] is its portability between technologies and projects. Unlike alternatives it is much easier to not only get up and running on other computers but also to share a working configuration with a team or the public in general.
For the past year I've been working heavily on a WordPress plugin scaffold that allows developers who are unfamiliar with WordPress, and who may not be working on a given plugin for long, to get started with it quickly. While developers can still use any editor they want for their work, part of this process has been including a VS Code configuration, including recommended plugins and settings, that will allow someone who has never touched WordPress before to edit and debug code as if they've been working on the platform for years. Here's how that works:

## Sharing extensions

The first key to getting a team running quickly is helping them find the right extensions for debugging and other tasks. VS Code makes this easy by allowing you to include a list of recommended extensions right in your project.

To get started, in your repository create a _.vscode_ folder and add an empty _extensions.json_ file to it. Then simply populate a _recommendations_ array with the ID's of the extensions you would like your users to install. Below is an example for the primary project I've been working on with my team lately:

<pre class="wp-block-code" aria-describedby="shcb-language-136" data-shcb-language-name="JSON / JSON with Comments" data-shcb-language-slug="json"><span><code class="hljs language-json">{
    &lt;span class="hljs-attr">"recommendations"&lt;/span>: &#91;
      &lt;span class="hljs-string">"bmewburn.vscode-intelephense-client"&lt;/span>,
      &lt;span class="hljs-string">"neilbrayfield.php-docblocker"&lt;/span>,
      &lt;span class="hljs-string">"wongjn.php-sniffer"&lt;/span>,
      &lt;span class="hljs-string">"felixfbecker.php-debug"&lt;/span>,
      &lt;span class="hljs-string">"dbaeumer.vscode-eslint"&lt;/span>,
      &lt;span class="hljs-string">"johnbillion.vscode-wordpress-hooks"&lt;/span>,
      &lt;span class="hljs-string">"esbenp.prettier-vscode"&lt;/span>
    ]
  }</code></span><small class="shcb-language" id="shcb-language-136"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JSON / JSON with Comments</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">json</span><span class="shcb-language__paren">)</span></small></pre>

Commit the file and, once a new dev opens the project they will be presented with a prompt to install the recommended extensions.

To get an extension's ID, simply right-click on the extension in question and select _Copy Extension ID_ from the menu that pop's up.

<div class="wp-block-image">
  <figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="533" height="372" src="/images/2021/09/copy-vs-code-extension-id.png" alt="Screenshot of the menu in MacOS with "Copy Extension ID" highlighted." class="wp-image-953" srcset="/images/2021/09/copy-vs-code-extension-id.png 533w, /images/2021/09/copy-vs-code-extension-id-400x279.png 400w" sizes="(max-width: 533px) 100vw, 533px" /><figcaption>Selecting an extension's ID is as simple as right-clicking the extension and selecting "Copy Extension ID."</figcaption></figure>
</div>

## Setting common settings {#h-setting-common-settings.wp-block-heading}

Installing extensions won't help anyone if they don't know how to use them. Take, for example, [PHP Debug][2] which requires a specific setup to work with any given development environment. As I also package a [Lando][3] configuration with this project I can add the necessary setup to the repository as easily as I added the extensions.

To configure PHP Debug to work with the recommended dev environment, in your _.vscode_ folder, first create a _launch.json_ file. Then populate the file with the configuration for your development environment. Below is the launch config from the same work project as above.

<pre class="wp-block-code" aria-describedby="shcb-language-137" data-shcb-language-name="JSON / JSON with Comments" data-shcb-language-slug="json"><span><code class="hljs language-json">{
    &lt;span class="hljs-attr">"version"&lt;/span>: &lt;span class="hljs-string">"0.2.0"&lt;/span>,
    &lt;span class="hljs-attr">"configurations"&lt;/span>: &#91;
      {
        &lt;span class="hljs-attr">"name"&lt;/span>: &lt;span class="hljs-string">"Listen for XDebug"&lt;/span>,
        &lt;span class="hljs-attr">"type"&lt;/span>: &lt;span class="hljs-string">"php"&lt;/span>,
        &lt;span class="hljs-attr">"request"&lt;/span>: &lt;span class="hljs-string">"launch"&lt;/span>,
        &lt;span class="hljs-attr">"port"&lt;/span>: &lt;span class="hljs-number">9003&lt;/span>,
        &lt;span class="hljs-attr">"log"&lt;/span>: &lt;span class="hljs-literal">true&lt;/span>,
        &lt;span class="hljs-attr">"pathMappings"&lt;/span>: {
            &lt;span class="hljs-attr">"/app/wordpress/wp-content/plugins/atlas-content-modeler/"&lt;/span>: &lt;span class="hljs-string">"${workspaceFolder}/atlas-content-modeler"&lt;/span>,
            &lt;span class="hljs-attr">"/app/wordpress/"&lt;/span>: &lt;span class="hljs-string">"${workspaceFolder}/wordpress"&lt;/span>,
        }
      },
      {
        &lt;span class="hljs-attr">"name"&lt;/span>: &lt;span class="hljs-string">"PhpUnit dummy"&lt;/span>,
        &lt;span class="hljs-attr">"type"&lt;/span>: &lt;span class="hljs-string">"php"&lt;/span>,
        &lt;span class="hljs-attr">"request"&lt;/span>: &lt;span class="hljs-string">"launch"&lt;/span>,
        &lt;span class="hljs-attr">"port"&lt;/span>: &lt;span class="hljs-number">9001&lt;/span>,
      }
    ],
    &lt;span class="hljs-attr">"compounds"&lt;/span>: &#91;
      {
        &lt;span class="hljs-attr">"name"&lt;/span>: &lt;span class="hljs-string">"PhpUnit"&lt;/span>,
        &lt;span class="hljs-attr">"configurations"&lt;/span>: &#91;
          &lt;span class="hljs-string">"Listen for XDebug"&lt;/span>,
          &lt;span class="hljs-string">"PhpUnit dummy"&lt;/span>
        ]
      }
    ]
  }
</code></span><small class="shcb-language" id="shcb-language-137"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JSON / JSON with Comments</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">json</span><span class="shcb-language__paren">)</span></small></pre>

You can do the same here with a _settings.json_ file including any common settings for your project however I caution you to be careful here. The idea is to help a developer get working on your project quicker, not to change how they work in general. As such, only include settings that are very specific to the project itself and avoid anything that might otherwise change visual or other elements of their workflow.

Using a combination of extensions and settings that are project specific can really lower the barrier of entry for a given project by allowing developers to get running much quicker than they would otherwise. In our case, I combine these settings with Make targets and a Lando dev environment to ensure that any new developer, even one who has never seen PHP much less WordPress, can work on our WordPress plugins in a matter of minutes rather than hours or days.

 [1]: https://code.visualstudio.com/
 [2]: https://github.com/xdebug/vscode-php-debug
 [3]: https://lando.dev/