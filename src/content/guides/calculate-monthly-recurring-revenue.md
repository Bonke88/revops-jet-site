---
title: "Calculate monthly recurring revenue: A practical guide for SaaS metrics"
description: "Discover how to calculate monthly recurring revenue with a practical guide. Learn core formulas, scenarios, and SQL tips for accurate SaaS reporting."
tool: "zapier"
useCase: "sales-automation"
difficulty: "intermediate"
timeToImplement: 24
publishDate: 2026-01-12
lastUpdated: 2026-01-12
aiGenerated: true
source: "outrank"
outrankId: "5aeb7276-72d2-4472-8872-f08bb163fe09"
---

At its core, calculating monthly recurring revenue is straightforward: you just add up all the subscription fees from your active customers for that month. But this simple number, **MRR**, is so much more than a line item. It's the financial heartbeat of any subscription business, giving you a clear, real-time snapshot of your company's health and momentum.

## Why Nailing Your MRR Calculation Is a Game Changer

![A person pointing at a financial chart on a screen, emphasizing the importance of accurate MRR calculation.](https://cdn.outrank.so/f45919cb-f824-4ceb-a837-e4aa19dc066c/f182b106-b5a0-44c4-9cf6-4958c032bb91/image.jpg)

Before we jump into the weeds with SQL queries and dbt models, let’s talk about why getting this one metric right is so fundamental. Think of MRR less as a number on a dashboard and more as the bedrock of a predictable growth engine. It influences everything from high-level strategic planning and budget allocation to investor confidence.

Sloppy calculations aren't just a minor mistake; they create dangerous blind spots in your business. When you miscalculate MRR, you can easily hide serious revenue leaks, mask underlying customer retention issues, and end up with wildly inaccurate financial forecasts. For any RevOps pro, delivering a precise MRR figure is how you build trust and prove your value to the entire organization.

### The Strategic Value of Accurate MRR

A trustworthy MRR isn't just for internal meetings—it directly impacts how the outside world sees your company. Investors love the predictability of subscription models, and that preference is baked right into company valuations. In fact, subscription-based businesses often command valuation multiples that are **2-3 times higher** than their transaction-based peers. This premium is driven entirely by the stability that recurring revenue provides.

This financial stability fuels more confident decision-making everywhere:

*   **Sales & Marketing:** Reliable MRR forecasts are essential for setting realistic targets and justifying marketing spend.
*   **Product Development:** Seeing how revenue trends shift can guide feature prioritization and shape the product roadmap.
*   **Customer Success:** A clear view of churned MRR puts a spotlight on the urgent need for effective retention efforts.

> The real power of MRR comes from breaking it down. When you can see not just the total, but the *why*—new business, expansion, downgrades, churn—you can make smarter, faster decisions that actually move the needle.

### Connecting MRR to Broader Business Health

Ultimately, MRR is a leading indicator of your long-term success. It’s the pulse check you need to gauge customer satisfaction and product-market fit. This is why having [proven strategies for reducing customer churn](https://docsbot.ai/article/reducing-customer-churn) is non-negotiable, as every lost customer directly chips away at your MRR and slows your momentum.

A healthy, growing MRR is intrinsically tied to a high customer lifetime value, which is one of the most critical measures of a sustainable SaaS business. You can explore this connection further at https://revopsjet.com/blog/lifetime-value-saas. Getting this right truly sets the stage for everything that follows.

## Breaking Down The Core MRR Formulas

To really get a handle on your monthly recurring revenue, you can't just look at the final number. Think of your total MRR as a story—it's the sum of all your active subscriptions, sure, but the real magic is in understanding the moving parts that make up that total.

Monthly Recurring Revenue (MRR) is the lifeblood for any subscription business. It's how we measure financial health and track our growth. At its core, the calculation is pretty simple: you add up all the new subscription revenue, any extra revenue from existing customers, and then subtract what you lost from downgrades and cancellations. This isn't just a SaaS thing; you can read more about these foundational principles and how they apply across different industries.

Let's walk through each piece of the puzzle with a real-world example from a B2B SaaS company to see how it all comes together.

### New MRR: The Engine of Acquisition

This one is the most straightforward. **New MRR** is simply the total monthly recurring revenue you've gained from brand-new customers in a given month. It’s a direct reflection of how well your sales and marketing teams are doing.

Imagine your company signs three new customers in March:
*   Company A comes on board with a **$500/month** plan.
*   Company B signs up for your **$1,000/month** premium offering.
*   Company C starts with a **$250/month** entry-level plan.

Your **New MRR** for March is **$1,750** ($500 + $1,000 + $250). This metric is your purest measure of new customer acquisition.

### Expansion MRR: Growth from Your Existing Customers

Often called upgrade MRR, **Expansion MRR** is all about the additional monthly revenue you generate from the customers you already have. This is a fantastic sign of a healthy business. It happens when customers upgrade to a higher-tier plan, add more seats, or buy a recurring add-on.

Let’s say in that same March:
*   An existing customer bumps up their plan from $500/month to $800/month. That’s an extra **$300** in Expansion MRR.
*   Another customer adds a new analytics feature pack for **$100/month**.

Your total **Expansion MRR** for the month is **$400**. This is a powerful signal that your customers are happy and see real value in what you offer.

### Contraction MRR: The Unavoidable Downgrade

On the flip side of expansion, you have **Contraction MRR**. This is the revenue you lose when existing customers downgrade to a cheaper plan or remove a paid add-on. It’s a negative number, but don’t panic—it’s a natural part of the subscription lifecycle.

For instance, in March:
*   A customer on a $1,000/month plan scales back to a $600/month plan. This creates **$400** in Contraction MRR.

Keeping a close eye on this number can help you spot potential issues with your product or pricing that might be causing customers to cut back.

### Churned MRR: The Cost of Lost Customers

Finally, there’s **Churned MRR**. This is the total monthly revenue you lose when customers cancel their subscriptions altogether.

If in March, a customer who was paying **$750/month** decides to leave, your **Churned MRR** for the month is **$750**. This is arguably the most critical metric to watch for the long-term health of your business.

To help you keep these straight, here's a quick cheat sheet with all the formulas in one place.

### Key MRR Component Formulas

| MRR Component | Formula | What It Measures |
| --- | --- | --- |
| **New MRR** | Sum of MRR from new customers | The success of your customer acquisition efforts. |
| **Expansion MRR** | Sum of MRR increases from existing customers | Growth from upgrades, add-ons, and upsells. |
| **Contraction MRR** | Sum of MRR decreases from existing customers | Revenue lost from downgrades or removed features. |
| **Churned MRR** | Sum of MRR from customers who canceled | Total revenue lost from customer churn. |
| **Net New MRR** | (New + Expansion) - (Contraction + Churned) | The true, net monthly growth of your recurring revenue. |

Having these formulas handy makes it much easier to diagnose the health of your revenue stream and see what's really driving your growth or decline each month.

> **Putting It All Together: Net New MRR**
> To get the real story of your monthly growth, you need to combine all these components into one powerful number: **Net New MRR**.
>
> **Formula:** Net New MRR = (New MRR + Expansion MRR) - (Contraction MRR + Churned MRR)
>
> Using our March example: Net New MRR = ($1,750 + $400) - ($400 + $750) = **$1,000**.
>
> This single number tells you that after all the ups, downs, and cancellations, your business grew its recurring revenue by a net of **$1,000** in March. That's the figure that truly matters.

## Building Your MRR Data Model in SQL and dbt

Alright, let's get our hands dirty. It’s time to move from the theory of MRR to the practical reality of building a reliable, production-ready data model. This is where we’ll translate raw billing data into trustworthy MRR metrics using SQL and dbt. I'll walk you through how I approach this, from hunting down the right data to building a dbt model your whole team can count on.

The very first thing I do is pinpoint the essential data fields. It doesn't matter if you're pulling from Stripe, Chargebee, a homegrown billing database, or even Salesforce CPQ—the fundamental building blocks are always the same. Your mission is to find the table or object that represents a single subscription line item for a customer.

### Identifying Your Core Data Sources

Before you write a single line of SQL, you need a clear map of your source data. Think of it as finding the "source of truth" for subscriptions, which almost always lives in your billing system's database or is accessible via its API.

You're on the lookout for these key fields:
*   **`subscription_id`**: A unique key for each subscription contract.
*   **`customer_id`**: The field that links the subscription back to a specific account.
*   **`plan_id`**: This identifies the specific product or plan tier they're on.
*   **`mrr_amount`**: The monthly value of that subscription.
*   **`start_date`**: The date the subscription officially became active.
*   **`end_date`**: When the subscription is set to churn or renew.

Once you’ve located these, you can start laying the foundation of your dbt project: the staging model. This is your first stop for cleaning, renaming, and lightly prepping the raw data for the more complex transformations that come later. If you need a refresher on structuring these foundational tables, our guide on [how to design a database schema](https://revopsjet.com/blog/how-to-design-database-schema) covers some great principles.

### Creating a Staging Model in dbt

A staging model is your friend. It acts as a clean, standardized buffer between your messy source data and your polished analytics models. Its job is simple: grab the columns you need, rename them to a consistent convention (like `snake_case`), and handle basic type casting.

Here’s a simplified example of what a `stg_subscriptions.sql` file might look like in dbt, pulling from a raw `stripe.subscriptions` table. It’s a common starting point.

-- models/staging/stg_subscriptions.sql
select
    id as subscription_id,
    customer_id,
    plan_id,
    -- Stripe stores amounts in cents, so we convert to dollars
    (plan_amount / 100.0) as mrr_amount,
    -- Cast timestamps to clean dates
    cast(start_date as date) as start_date,
    cast(ended_at as date) as end_date
from
    {{ source('stripe', 'subscriptions') }}
where
    -- Always a good idea to filter out test data
    is_test = false

The beauty of using a tool like dbt is that it brings a clear, version-controlled structure to your analytics engineering work. By keeping every transformation in code, you create a repeatable and transparent process for calculating something as critical as MRR.

### Generating a Monthly MRR Snapshot

With a clean staging model ready, the next move is to transform this subscription-level data into a monthly snapshot. Our goal is to create a table where each row represents a single customer's total MRR for a specific month. I usually call this "facts" table something like `fct_mrr_monthly`, and it becomes the workhorse for all MRR reporting.

The trick here is to generate a series of months for each subscription, spanning its entire active period from the start date to the end date. A common technique is to use a "date spine" or a calendar utility model in dbt, which is really just a simple table with one row for every day or month.

> The real power of a monthly snapshot model is its ability to reconstruct history. It lets you ask questions like, "What was our total MRR in June of last year?" or "Which customers expanded their MRR between Q1 and Q2?" without running complex calculations on the fly.

This visual perfectly illustrates how the different components of revenue come together to affect your total MRR each month.

![Diagram illustrating Monthly Recurring Revenue (MRR) calculation, showing new, expansion, and churn components.](https://cdn.outrank.so/f45919cb-f824-4ceb-a837-e4aa19dc066c/ba293bbf-405a-4726-b435-bac6e881ca83/calculate-monthly-recurring-revenue-mrr-calculation.jpg)

As you can see, the process captures the dynamic nature of MRR, where new and expansion revenue build your base while churn inevitably chips away at it.

Here’s a look at the SQL logic for your `fct_mrr_monthly.sql` model. It joins the staged subscriptions to a date spine, effectively "fanning out" each subscription to generate a record for every month it was active.

-- models/marts/fct_mrr_monthly.sql
with subscriptions as (
    select * from {{ ref('stg_subscriptions') }}
),

date_spine as (
    -- This is a utility model you build once, with one row per month
    select * from {{ ref('util_dates') }} 
)

select
    date_spine.date_month,
    subscriptions.customer_id,
    sum(subscriptions.mrr_amount) as mrr
from
    subscriptions
inner join
    date_spine on
        -- The join logic to check if the subscription was active during the month
        subscriptions.start_date <= date_spine.date_month
        and (subscriptions.end_date is null or subscriptions.end_date > date_spine.date_month)
group by 1, 2

This model provides a clean, aggregated view of MRR per customer, per month. It's the perfect foundation for building dashboards, calculating growth metrics like **Net New MRR**, and running cohort retention analysis.

As you scale, you'll want to ensure your data warehouse can keep up. It's worth exploring expert [strategies for leveraging Snowflake](https://www.faberwork.com/latest-thinking/collaborating-with-faberwork-a-snowflake-partner) or a similar cloud platform. The combination of dbt and a powerful data warehouse ensures your MRR calculations are not only accurate but built to last.

## How to Handle Tricky MRR Calculation Scenarios

<iframe width="100%" style="aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/pvv3HObs8ZY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Once you've got your basic MRR model up and running, you’ll quickly run into the messy reality of subscription billing. The real world is full of complexities that can throw your numbers way off if you're not prepared for them. Calculating MRR accurately means you have to get into the weeds and tackle these edge cases head-on.

Scenarios like annual contracts, mid-cycle plan changes, and handling different currencies are exactly where many RevOps and finance teams get tripped up. And getting these wrong doesn't just skew a report; it erodes trust in your data and can lead you to make some really poor strategic calls.

Let's walk through the most common curveballs I've seen and how to knock them out of the park with solid logic and clean SQL.

### Normalizing Annual Contracts

One of the first hurdles you'll face is figuring out what to do with an annual contract. When a customer pays you **$12,000** upfront for a year of service, you can't just book a huge MRR spike in one month and then have eleven months of nothing. That’s cash collection, not recurring revenue. The key here is **normalization**.

You have to break down that total contract value into its monthly equivalent. For a **$12,000** annual deal, that’s **$1,000** in MRR. This simple division ensures your metric reflects the ongoing customer commitment, smoothing out the revenue recognition over the entire term.

Here's how that looks in a staging model:
-- models/staging/stg_subscriptions.sql
select
    id as subscription_id,
    customer_id,
    -- Normalize based on the contract term
    case
        when plan_interval = 'year' then (plan_amount / 12.0)
        else plan_amount
    end as mrr_amount,
    start_date,
    end_date
from
    {{ source('stripe', 'subscriptions') }}
This bit of logic is your first line of defense, making sure every subscription, no matter its billing cycle, is measured on a level playing field.

### Managing Prorated Charges and Mid-Cycle Changes

Customers are impatient. They don't wait for their billing cycle to end before upgrading, downgrading, or adding seats. These mid-month changes create prorated charges or credits, and it’s a classic mistake to let them creep into your MRR calculation.

Your MRR should *only* reflect the new, go-forward recurring value of that subscription.

Let’s say a customer upgrades from a **$500/month** plan to an **$800/month** plan halfway through the month. Your billing system might generate a one-time prorated charge of **$150** to cover the difference. That **$150** is not MRR. The *actual* Expansion MRR from this event is **$300** ($800 - $500), because that’s the new monthly commitment.

Your data model needs to be smart enough to ignore those prorated invoice line items and instead focus on the `subscription_updated` events that signal a true change in the recurring plan.

> Your source of truth for MRR changes should be the subscription contract event log, not the invoice line items. Invoices reflect cash collection and one-time billing adjustments, while subscription events track the actual recurring commitment.

### Converting Multiple Currencies

If you operate globally, dealing with multiple currencies is a headache you can't avoid. Reporting MRR in a single, consistent currency is absolutely non-negotiable for any coherent analysis. You just can't compare apples and oranges by having reports in both USD and EUR.

The best approach is to set up a standardized process for currency conversion.

*   **Pick a single reporting currency.** For most US-based companies, this will be USD. Stick to it.
*   **Decide on a conversion cadence.** Don't use daily fluctuating exchange rates—it will introduce artificial volatility and make your MRR chart look like a seismograph. A fixed monthly average or end-of-month rate is a much more stable and sane approach.

In your [dbt](https://www.getdbt.com/) model, you can join your subscription data with a currency conversion table that gets updated on your chosen schedule. This keeps daily forex market noise out of your core metrics. Poorly managed currency conversions are insidious; they can easily mask real business problems, making it harder to spot a rise in customer churn. Our guide on [churn in SaaS](https://revopsjet.com/blog/churn-in-saas) dives deeper into how these kinds of hidden data issues can obscure critical trends.

### Accounting for Non-Standard Subscription Terms

While monthly and annual plans are the bread and butter of SaaS, we’re seeing more and more businesses experiment with different terms. Weekly subscriptions, in particular, have become surprisingly common. Recent data shows that weekly plans now account for **47%** of all subscription revenue for some app categories, a huge jump from just a few years ago. You can [discover more insights about subscription trends on Adapty.io](https://adapty.io/blog/9-subscription-trends-dominating-2025/).

So, what do you do with a **$25/week** plan? You can't just multiply by four, because months aren't all four weeks long. To do this right, you need to find the average number of weeks in a month.

A year has **365.25** days (to account for leap years), which works out to **52.18** weeks. Divide that by 12 months, and you get an average of **4.348** weeks per month.

*   **Normalized MRR** = Weekly Price × 4.348
*   **Example** = $25 × 4.348 = **$108.70 MRR**

This method gives you a much more precise and stable way to fold these shorter, non-standard billing cycles into your total MRR picture.

### Solutions for Common MRR Edge Cases

To pull this all together, here’s a quick-reference table outlining the solutions for the complex scenarios we've just covered. These are the kinds of challenges that separate a decent MRR model from a truly reliable one.

| Scenario | Challenge | Recommended Solution |
| :--- | :--- | :--- |
| **Annual/Quarterly Contracts** | Upfront payments create a massive one-time spike, distorting the true monthly recurring value. | **Normalize the revenue.** Divide the total contract value by the number of months in the term (e.g., `$12,000 / 12 = $1,000` MRR). |
| **Proration & Mid-Cycle Changes** | One-time charges or credits for upgrades/downgrades can be mistaken for recurring revenue. | **Isolate subscription events.** Base MRR changes on `subscription_updated` events, not invoice line items. The change in MRR is the new plan value minus the old plan value. |
| **Multiple Currencies** | Inconsistent currencies make it impossible to get a single, coherent view of total MRR. | **Standardize to a single currency.** Use a fixed monthly or quarterly exchange rate to avoid artificial volatility from daily fluctuations. |
| **Non-Standard Terms (e.g., Weekly)** | Shorter billing cycles don't align cleanly with monthly reporting, making simple multiplication inaccurate. | **Calculate a precise monthly equivalent.** For weekly plans, multiply the weekly price by **4.348** (the average number of weeks in a month). |

Tackling these edge cases isn't just about cleaning up data—it's about building a foundation of trust. When your team knows the MRR number is rock-solid, they can make smarter decisions with confidence.

## Keeping Your MRR Metric Accurate and Trustworthy

![A person analyzing business metrics and MRR dashboards on a tablet and desktop computer.](https://cdn.outrank.so/f45919cb-f824-4ceb-a837-e4aa19dc066c/872c9c4e-c312-41e7-96ca-607d994353da/calculate-monthly-recurring-revenue-mrr-dashboard.jpg)

Getting your data model built is a fantastic feeling, but the job isn't over. An MRR metric is only as good as its last validation. Honestly, keeping your numbers accurate is a constant mission, and it's arguably the most important part of this whole process.

Think about it: a metric that nobody trusts is worse than having no metric at all. This isn't just about being technically correct; it's about building real confidence across the company. When your leadership team looks at an MRR chart, they need to believe it, no questions asked. That kind of trust is earned through rigorous, continuous validation and a transparent process for keeping the data clean.

### Creating Your Validation Checklist

To start building that trust, you need a systematic way to check your work. This isn't a one-and-done deal, but a routine you should run regularly—especially after any changes to your billing system or data pipelines. It’s your best defense against those silent, creeping errors that can completely undermine your hard work.

Here’s a practical checklist I've used time and again to cross-reference my model's output and hunt down any weirdness:

*   **Reconcile with your billing system.** Your [Stripe](https://stripe.com/) or [Chargebee](https://www.chargebee.com/) account is the ultimate source of truth. At the end of each month, pull a report of all active subscriptions and their monthly values. The total from that report *must* match the total MRR calculated by your dbt model. If it doesn't, it's time to dig in line by line.

*   **Spot-check against the ledger.** While MRR isn't the same as recognized revenue, your accounting ledger is a great sanity check. Compare your model's outputs for big annual contracts against how those deals are being booked. Any major disconnects could point to a problem in how you're normalizing contract terms.

*   **Do some manual customer deep dives.** I love this part. Pick a handful of customers—especially the tricky ones with a history of upgrades, downgrades, and add-ons—and manually trace their entire MRR journey. Does your model correctly reflect the timing and value of every change? This hands-on audit is a fantastic way to catch subtle logic bugs.

### Automating Data Quality with dbt Tests

Manual checks are critical, but they don't scale. To truly protect your MRR calculation, you need an automated safety net. This is where [dbt](https://www.getdbt.com/)'s testing features become your best friend. These tests run every single time you build your models, acting as a constant guardian of your data's integrity.

You can get immense value by starting with a few simple, out-of-the-box tests:

*   **`not_null`**: Make sure critical fields like `customer_id` and `mrr_amount` are never empty. A single null value here could make an entire subscription vanish from your calculation.
*   **`unique`**: Check that your primary keys, like a combination of `customer_id` and `date_month` in your final MRR table, are truly unique.
*   **`accepted_values`**: If you have a `plan_type` column, you can test that it only contains expected values like 'monthly' or 'annual'.

> For more advanced protection, I highly recommend using a package like `dbt_expectations`. It lets you write more sophisticated tests, like asserting that an `mrr_amount` is never negative. Catching one negative value before it hits a dashboard can save you from a very confusing and credibility-damaging meeting.

By embedding these tests directly into your dbt project, you're essentially codifying your assumptions about the data. If a source system changes or bad data sneaks in, your dbt run will fail, stopping the corrupted metric from ever reaching your stakeholders.

### Embracing Metric Observability and Monitoring

The final piece of this puzzle is setting up end-to-end observability. This just means having a clear line of sight from the raw data all the way to the final dashboard. When someone asks, "Why did MRR dip last Tuesday?" you need to be able to answer with complete confidence.

**Metric lineage** tools are a game-changer here. They map out every transformation, showing you exactly how a raw field from your billing platform contributes to the final number. That transparency is everything for quick troubleshooting and building trust with the people using your data.

Beyond lineage, you need active monitoring and alerting. Set up automated alerts that fire if your MRR fluctuates by an unusual amount day-over-day. A sudden **15%** drop could be a real business event, or it could be a broken data pipeline. You need to be the first one to know, investigate, and communicate what happened.

I also recommend creating a simple **runbook** for your team. This document should outline exactly what to do when an MRR alert goes off:

*   Who is the on-call person to investigate?
*   Where are the primary dashboards to check first?
*   What are the first dbt tests to re-run?
*   How do we communicate the issue to stakeholders?

This proactive approach to monitoring and response shifts you from being a reactive report-builder into a trusted steward of the company's most important numbers. When you can reliably calculate MRR *and* prove its accuracy, you empower the entire organization to make smarter, data-driven decisions.

## Common Questions About Calculating MRR

Even with a rock-solid data model and a ton of validation, a few tricky questions always seem to surface when teams get serious about calculating MRR. Nailing down these details is a huge deal—it's what separates a genuinely reliable metric from a vanity number that just looks good on a slide.

Let’s walk through some of the most common points of confusion I’ve run into over the years. Getting these right will help you build an MRR figure you can actually trust.

### Should One-Time Fees Be Included in MRR?

This is probably the most frequent question I get, and the answer is a hard **no**.

Your MRR calculation needs to be completely free of one-time payments. This means things like implementation costs, setup fees, training sessions, or any professional services work have to be excluded.

The "R" in MRR stands for **"recurring"** for a very good reason. The entire point of this metric is to give you a clear, predictable baseline of your revenue. Tossing a one-time fee in there just creates an artificial spike that makes your growth look better than it is and totally torpedoes your ability to forecast. Track those fees, absolutely, but keep them separate as non-recurring revenue.

### How Do I Handle Usage-Based or Variable Billing?

This is another great question, especially now that so many SaaS companies are using hybrid pricing. The answer really comes down to your specific model.

If you're running on a *purely* usage-based system with no committed base fee (think of a pay-as-you-go API service), then MRR probably isn't the right metric for you in the first place. You don't have any truly recurring revenue to track.

For hybrid models, though, the rule is simple: **only include the predictable, committed base fee in your MRR.**

> For example, let's say a customer pays a guaranteed **$500/month** for platform access, plus a variable charge based on how much data they consume. Only that base **$500** goes into your MRR. The overage is tracked separately as variable revenue because you can't count on it recurring at the same level every month.

### What Is the Difference Between MRR and Recognized Revenue?

This is a critical distinction that often trips up teams where RevOps and Finance overlap. It helps to think of them this way:

*   **MRR is an operational metric.** Its job is to give you a real-time pulse on the momentum of your subscription business. It standardizes every contract into a monthly value, which is perfect for forecasting and internal strategy.
*   **Recognized Revenue is an accounting metric.** This one is governed by strict accounting standards (like ASC 606) and shows the portion of revenue that has been formally "earned" in a specific period for official financial reports.

Let's look at a quick example. A new customer pays **$1,200** upfront for an annual plan in January.

*   For that customer, your **MRR** is **$100** every single month for the next 12 months.
*   Your **Recognized Revenue** for January is also **$100**. The other **$1,100** sits on your balance sheet as deferred revenue until it's "earned" over the coming months.

They're related, for sure, but they serve completely different masters. MRR tells you about your business's health; recognized revenue keeps you compliant.

### How Often Should My Team Calculate and Report on MRR?

Even though "monthly" is in the name, top-tier RevOps teams aren't just waiting around until the 1st of the next month.

With a modern data stack, you should be able to calculate MRR daily, or even in near real-time. This gives you a constant, live view into the health of the business.

As for reporting, a good rhythm is to review MRR movements—new, expansion, churn, and contraction—on a weekly basis with your go-to-market teams. This helps inform immediate, tactical decisions. Then, you can do a deeper, more strategic monthly review with the leadership team to guide bigger-picture planning and where to put resources.

---
At **RevOps JET**, we build the production-grade data pipelines and dbt models that deliver these kinds of trustworthy metrics. If you need real engineers to help you move beyond spreadsheets and create a reliable analytics foundation, [check out what we offer](https://revopsjet.com).
