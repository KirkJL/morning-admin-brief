/*
 * ============================================================
 * 365in5 EXAM SIMULATOR
 * MS-102 — MICROSOFT 365 ADMINISTRATOR
 * ============================================================
 *
 * CURRENT BLUEPRINT
 * -----------------
 * Skills measured as of:
 * 28 April 2026
 *
 * Microsoft published weighting:
 *
 * 1. Deploy and manage a Microsoft 365 tenant
 *    10–15%
 *
 * 2. Implement and manage Microsoft Entra identity and access
 *    25–30%
 *
 * 3. Manage security and threats by using Microsoft Defender XDR
 *    35–40%
 *
 * 4. Manage compliance by using Microsoft Purview
 *    15–20%
 *
 * 365in5 50-question allocation:
 *
 * Microsoft 365 tenant:         7 = 14%
 * Entra identity/access:       14 = 28%
 * Defender XDR:                19 = 38%
 * Microsoft Purview:          10 = 20%
 *
 * TOTAL:                       50 = 100%
 *
 * NOTE
 * ----
 * MS-102 is scheduled to retire on 31 October 2026.
 *
 * These are original practice questions.
 * They are NOT Microsoft exam questions and are NOT sourced
 * from exam dumps or leaked examination material.
 *
 * ============================================================
 */


"use strict";


const MS102_EXAM = {

    id:
        "ms-102",

    code:
        "MS-102",

    title:
        "Microsoft 365 Administrator",

    category:
        "Microsoft 365",

    description:
        "Practice Microsoft 365 tenant administration, Microsoft Entra " +
        "identity and access, Microsoft Defender XDR security operations " +
        "and Microsoft Purview compliance under simulated exam conditions.",

    blueprintVersion:
        "2026-04-28",

    blueprintLabel:
        "Skills measured as of 28 April 2026",

    retirementDate:
        "2026-10-31",

    retirementLabel:
        "Retiring 31 October 2026",

    questionCount:
        50,

    durationMinutes:
        100,

    simulatedPassingScore:
        700,


    domains: {


        tenant: {

            name:
                "Deploy and manage a Microsoft 365 tenant",

            minWeight:
                10,

            maxWeight:
                15,

            simulatorQuestions:
                7

        },


        identity: {

            name:
                "Implement and manage Microsoft Entra identity and access",

            minWeight:
                25,

            maxWeight:
                30,

            simulatorQuestions:
                14

        },


        defender: {

            name:
                "Manage security and threats by using Microsoft Defender XDR",

            minWeight:
                35,

            maxWeight:
                40,

            simulatorQuestions:
                19

        },


        purview: {

            name:
                "Manage compliance by using Microsoft Purview",

            minWeight:
                15,

            maxWeight:
                20,

            simulatorQuestions:
                10

        }

    }

};



const MS102_QUESTIONS = [


    /*
     * ========================================================
     * DOMAIN 1
     * DEPLOY AND MANAGE A MICROSOFT 365 TENANT
     * 7 QUESTIONS
     * ========================================================
     */


    {

        id:
            "MS102-TENANT-001",

        domain:
            "tenant",

        type:
            "single",

        objective:
            "Configure a Microsoft 365 tenant",

        question:
            "Your organisation has purchased a new domain named " +
            "contoso.com. You need Microsoft 365 users to receive email " +
            "using addresses in that domain. What should you configure first?",

        options: [

            "Add and verify contoso.com as a custom domain in Microsoft 365.",

            "Create an Azure virtual network.",

            "Create a Microsoft Purview retention label.",

            "Configure Microsoft Defender Antivirus."

        ],

        answer:
            [0],

        explanation:
            "A custom domain must be added and ownership verified before " +
            "it can be used for Microsoft 365 identities and services."

    },


    {

        id:
            "MS102-TENANT-002",

        domain:
            "tenant",

        type:
            "single",

        objective:
            "Manage Microsoft 365 service health",

        question:
            "Users report that Exchange Online is unavailable. Before " +
            "troubleshooting individual clients, which Microsoft 365 " +
            "admin capability should you check first?",

        options: [

            "Service health",

            "Microsoft Purview eDiscovery",

            "Azure Resource Graph",

            "Windows Autopilot"

        ],

        answer:
            [0],

        explanation:
            "Microsoft 365 service health shows current and recent service " +
            "incidents and advisories affecting the tenant."

    },


    {

        id:
            "MS102-TENANT-003",

        domain:
            "tenant",

        type:
            "single",

        objective:
            "Manage Microsoft 365 administrator roles",

        question:
            "A support employee needs to reset passwords for users but " +
            "must not receive broad tenant-wide administrative access. " +
            "What should you do?",

        options: [

            "Assign the least-privileged Microsoft 365 or Entra role that provides password reset capability.",

            "Assign Global Administrator.",

            "Assign Global Reader.",

            "Assign SharePoint Administrator."

        ],

        answer:
            [0],

        explanation:
            "Microsoft recommends least privilege. A narrowly scoped " +
            "administrator role should be used instead of Global Administrator."

    },


    {

        id:
            "MS102-TENANT-004",

        domain:
            "tenant",

        type:
            "single",

        objective:
            "Manage Microsoft 365 Apps",

        question:
            "You need to control the update channel used by Microsoft 365 " +
            "Apps on managed Windows devices. Which configuration should " +
            "you manage?",

        options: [

            "Microsoft 365 Apps update channel settings",

            "Azure DNS records",

            "Microsoft Sentinel analytics rules",

            "Azure resource locks"

        ],

        answer:
            [0],

        explanation:
            "Microsoft 365 Apps update channels determine how frequently " +
            "devices receive feature and quality updates."

    },


    {

        id:
            "MS102-TENANT-005",

        domain:
            "tenant",

        type:
            "single",

        objective:
            "Manage tenant configuration",

        question:
            "You need to review organisation-wide Microsoft 365 settings " +
            "and administrative configuration from a central web interface. " +
            "Which portal is designed for this?",

        options: [

            "Microsoft 365 admin center",

            "Azure Storage Explorer",

            "Microsoft Defender for Endpoint local client only",

            "Windows Event Viewer"

        ],

        answer:
            [0],

        explanation:
            "The Microsoft 365 admin center is the central administrative " +
            "portal for tenant-wide Microsoft 365 configuration."

    },


    {

        id:
            "MS102-TENANT-006",

        domain:
            "tenant",

        type:
            "multi",

        objective:
            "Manage Microsoft 365 tenant health",

        question:
            "Which TWO sources help administrators understand current " +
            "Microsoft 365 service issues and planned changes?",

        options: [

            "Service health",

            "Message center",

            "Azure NSG flow logs only",

            "Windows Defender Firewall local logs only"

        ],

        answer:
            [0, 1],

        explanation:
            "Service health reports incidents and advisories, while Message " +
            "center communicates upcoming Microsoft 365 service changes."

    },


    {

        id:
            "MS102-TENANT-007",

        domain:
            "tenant",

        type:
            "single",

        objective:
            "Automate Microsoft 365 administration",

        question:
            "You need to automate repetitive Microsoft 365 administrative " +
            "tasks across services. Which TWO technologies are commonly " +
            "used for this purpose?",

        options: [

            "PowerShell and Microsoft Graph",

            "Azure Bastion and Azure Files",

            "Microsoft Paint and Notepad",

            "Azure Load Balancer and ExpressRoute"

        ],

        answer:
            [0],

        explanation:
            "PowerShell and Microsoft Graph are core automation tools for " +
            "Microsoft 365 administration."

    },



    /*
     * ========================================================
     * DOMAIN 2
     * IMPLEMENT AND MANAGE MICROSOFT ENTRA IDENTITY AND ACCESS
     * 14 QUESTIONS
     * ========================================================
     */


    {

        id:
            "MS102-ID-001",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Manage users and groups",

        question:
            "All users whose Department attribute equals Finance must " +
            "automatically become members of Group1. What should you configure?",

        options: [

            "Dynamic group membership",

            "Manual static membership only",

            "An Azure resource lock",

            "A Microsoft Purview retention policy"

        ],

        answer:
            [0],

        explanation:
            "Dynamic groups automatically update membership based on " +
            "Microsoft Entra identity attributes."

    },


    {

        id:
            "MS102-ID-002",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Manage licenses",

        question:
            "Every member of Group1 should automatically receive a " +
            "Microsoft 365 license. The license should be removed when " +
            "the user leaves Group1. Which capability should you use?",

        options: [

            "Group-based licensing",

            "Manual license assignment only",

            "Microsoft Defender XDR",

            "Azure Firewall"

        ],

        answer:
            [0],

        explanation:
            "Group-based licensing automatically assigns and removes " +
            "licenses based on group membership."

    },


    {

        id:
            "MS102-ID-003",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Implement multifactor authentication",

        question:
            "Administrators must complete an additional authentication " +
            "factor whenever they access Microsoft 365 administration " +
            "portals. Which capability should you use?",

        options: [

            "Conditional Access requiring MFA",

            "A Microsoft Purview sensitivity label",

            "Azure Cost Management",

            "Exchange retention tags"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access can require multifactor authentication " +
            "based on user, role, application and other signals."

    },


    {

        id:
            "MS102-ID-004",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Configure Conditional Access",

        question:
            "Users accessing Microsoft 365 from unmanaged devices must " +
            "be blocked unless they satisfy an approved access control. " +
            "Which Microsoft Entra capability should you configure?",

        options: [

            "Conditional Access",

            "Azure Load Balancer",

            "Microsoft Purview Audit",

            "Microsoft Defender Antivirus exclusions"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access evaluates contextual identity and device " +
            "signals and enforces access controls."

    },


    {

        id:
            "MS102-ID-005",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Implement passwordless authentication",

        question:
            "You want users to sign in using phishing-resistant hardware " +
            "security keys without entering passwords. Which method should " +
            "you enable?",

        options: [

            "FIDO2 security keys",

            "SMS-only authentication",

            "Basic authentication",

            "Azure Storage access keys"

        ],

        answer:
            [0],

        explanation:
            "FIDO2 security keys provide phishing-resistant passwordless " +
            "authentication."

    },


    {

        id:
            "MS102-ID-006",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Configure self-service password reset",

        question:
            "Users should reset forgotten passwords without contacting " +
            "the help desk. What should you enable?",

        options: [

            "Self-service password reset",

            "Microsoft Sentinel",

            "Azure Bastion",

            "Microsoft Purview eDiscovery"

        ],

        answer:
            [0],

        explanation:
            "SSPR allows eligible users to reset or unlock their accounts " +
            "after completing configured verification methods."

    },


    {

        id:
            "MS102-ID-007",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Manage external identities",

        question:
            "A supplier needs access to a Microsoft Teams workspace using " +
            "their existing external organisation identity. Which identity " +
            "approach should you use?",

        options: [

            "Microsoft Entra B2B guest access",

            "A shared internal administrator account",

            "A managed identity",

            "An Azure Storage SAS"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra B2B collaboration allows external users to " +
            "access resources using their existing identities."

    },


    {

        id:
            "MS102-ID-008",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Implement identity synchronization",

        question:
            "Your organisation has on-premises Active Directory and wants " +
            "users synchronised to Microsoft Entra ID. Which Microsoft " +
            "technology is commonly used to provide hybrid identity sync?",

        options: [

            "Microsoft Entra Connect Sync",

            "Azure Firewall",

            "Microsoft Defender for Office 365",

            "Microsoft Purview Records Management"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra Connect Sync synchronizes supported identity " +
            "data between on-premises Active Directory and Microsoft Entra ID."

    },


    {

        id:
            "MS102-ID-009",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Implement password hash synchronization",

        question:
            "Cloud authentication should continue if on-premises " +
            "authentication infrastructure is unavailable. Which hybrid " +
            "authentication method stores a derived password hash in " +
            "Microsoft Entra ID?",

        options: [

            "Password hash synchronization",

            "Pass-through authentication only",

            "Application Proxy",

            "Windows Hello for Business only"

        ],

        answer:
            [0],

        explanation:
            "Password hash synchronization enables Microsoft Entra ID " +
            "to validate cloud authentication independently."

    },


    {

        id:
            "MS102-ID-010",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Manage privileged roles",

        question:
            "Global Administrator access should be available to an " +
            "administrator only when required and should expire automatically. " +
            "Which capability should you use?",

        options: [

            "Privileged Identity Management",

            "Azure Policy",

            "Microsoft Purview Data Loss Prevention",

            "Azure Files"

        ],

        answer:
            [0],

        explanation:
            "PIM supports eligible, time-bound and just-in-time privileged " +
            "role activation."

    },


    {

        id:
            "MS102-ID-011",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Manage risky identities",

        question:
            "Microsoft Entra detects a high-risk user account. Which " +
            "service provides the identity risk detection?",

        options: [

            "Microsoft Entra ID Protection",

            "Azure Advisor",

            "Microsoft Purview Communication Compliance",

            "Exchange Online Protection only"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra ID Protection identifies risky users and " +
            "risky sign-ins."

    },


    {

        id:
            "MS102-ID-012",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Review access",

        question:
            "Managers must periodically confirm whether employees still " +
            "require access to a sensitive Microsoft 365 group. Which " +
            "capability should you configure?",

        options: [

            "Access reviews",

            "Azure Backup",

            "Microsoft Defender Antivirus",

            "Azure DNS"

        ],

        answer:
            [0],

        explanation:
            "Access reviews provide recurring access-certification workflows."

    },


    {

        id:
            "MS102-ID-013",

        domain:
            "identity",

        type:
            "multi",

        objective:
            "Implement secure authentication",

        question:
            "Which TWO are examples of strong Microsoft Entra " +
            "authentication methods?",

        options: [

            "Microsoft Authenticator",

            "FIDO2/passkeys",

            "Azure Storage account keys",

            "Network security groups"

        ],

        answer:
            [0, 1],

        explanation:
            "Microsoft Authenticator and FIDO2/passkeys are supported " +
            "modern authentication methods."

    },


    {

        id:
            "MS102-ID-014",

        domain:
            "identity",

        type:
            "single",

        objective:
            "Investigate sign-ins",

        question:
            "A user reports an unexpected MFA prompt. You need to identify " +
            "the application, source IP and Conditional Access policies " +
            "evaluated during the login. Which data source should you review?",

        options: [

            "Microsoft Entra sign-in logs",

            "Microsoft Purview Content Explorer",

            "Azure Pricing Calculator",

            "Windows Update history"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra sign-in logs provide detailed authentication " +
            "and Conditional Access information."

    },



    /*
     * ========================================================
     * DOMAIN 3
     * MANAGE SECURITY AND THREATS USING MICROSOFT DEFENDER XDR
     * 19 QUESTIONS
     * ========================================================
     */


    {

        id:
            "MS102-DEF-001",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage incidents in Microsoft Defender XDR",

        question:
            "Security alerts from multiple Microsoft Defender products " +
            "relate to the same attack campaign. Which Defender XDR object " +
            "groups related alerts into a coordinated investigation?",

        options: [

            "Incident",

            "Sensitivity label",

            "Retention policy",

            "Access package"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Defender XDR correlates related alerts and evidence " +
            "into incidents for unified investigation."

    },


    {

        id:
            "MS102-DEF-002",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Investigate incidents",

        question:
            "An incident contains alerts involving a user, endpoint and " +
            "malicious file. Where should an analyst review the relationships " +
            "between these entities?",

        options: [

            "The incident investigation and evidence views in Microsoft Defender XDR",

            "Microsoft 365 Message center",

            "Microsoft Purview Compliance Manager",

            "Azure Pricing Calculator"

        ],

        answer:
            [0],

        explanation:
            "Defender XDR incident views correlate alerts, entities and " +
            "evidence across Microsoft security products."

    },


    {

        id:
            "MS102-DEF-003",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Use Advanced Hunting",

        question:
            "You need to search Microsoft Defender XDR telemetry using " +
            "custom Kusto Query Language queries. Which feature should you use?",

        options: [

            "Advanced Hunting",

            "Access Reviews",

            "Compliance Manager",

            "Microsoft 365 Apps admin center"

        ],

        answer:
            [0],

        explanation:
            "Advanced Hunting allows analysts to query Defender XDR data " +
            "using KQL."

    },


    {

        id:
            "MS102-DEF-004",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage Microsoft Defender for Endpoint",

        question:
            "Which Defender product provides endpoint detection and response " +
            "for supported Windows, macOS and other endpoint platforms?",

        options: [

            "Microsoft Defender for Endpoint",

            "Microsoft Defender for Office 365",

            "Microsoft Purview Audit",

            "Microsoft Entra ID Governance"

        ],

        answer:
            [0],

        explanation:
            "Defender for Endpoint provides endpoint detection, investigation " +
            "and response capabilities."

    },


    {

        id:
            "MS102-DEF-005",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Respond to endpoint threats",

        question:
            "A compromised endpoint must be prevented from communicating " +
            "with other network devices while security staff investigate it. " +
            "Which Defender for Endpoint action should you consider?",

        options: [

            "Isolate device",

            "Retain email",

            "Create an access package",

            "Assign a sensitivity label"

        ],

        answer:
            [0],

        explanation:
            "Device isolation restricts network communication from a " +
            "compromised endpoint while maintaining supported security " +
            "management connectivity."

    },


    {

        id:
            "MS102-DEF-006",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage vulnerabilities",

        question:
            "You need to identify endpoint software vulnerabilities and " +
            "prioritise remediation based on exposure and risk. Which " +
            "capability should you use?",

        options: [

            "Microsoft Defender Vulnerability Management",

            "Microsoft Purview eDiscovery",

            "Azure DNS",

            "Microsoft Entra Application Proxy"

        ],

        answer:
            [0],

        explanation:
            "Defender Vulnerability Management helps identify and " +
            "prioritize endpoint vulnerabilities."

    },


    {

        id:
            "MS102-DEF-007",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage Microsoft Defender for Office 365",

        question:
            "Which Microsoft Defender product focuses on protection " +
            "against phishing, malicious attachments and malicious links " +
            "in Microsoft 365 collaboration services?",

        options: [

            "Microsoft Defender for Office 365",

            "Microsoft Defender for Identity",

            "Microsoft Defender for Cloud Apps",

            "Microsoft Defender for Cloud"

        ],

        answer:
            [0],

        explanation:
            "Defender for Office 365 protects email and collaboration " +
            "services against phishing and related threats."

    },


    {

        id:
            "MS102-DEF-008",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Configure Safe Attachments",

        question:
            "Incoming email attachments should be analysed for malicious " +
            "content before users can safely open them. Which Defender " +
            "for Office 365 capability should you configure?",

        options: [

            "Safe Attachments",

            "Sensitivity labels",

            "Access reviews",

            "Microsoft Entra Password Protection"

        ],

        answer:
            [0],

        explanation:
            "Safe Attachments analyses supported attachments for malicious " +
            "content."

    },


    {

        id:
            "MS102-DEF-009",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Configure Safe Links",

        question:
            "Users need protection when they click URLs in email and " +
            "supported Microsoft 365 applications. Which capability " +
            "should you configure?",

        options: [

            "Safe Links",

            "Safe Attachments only",

            "Azure Bastion",

            "Access packages"

        ],

        answer:
            [0],

        explanation:
            "Safe Links provides time-of-click URL protection."

    },


    {

        id:
            "MS102-DEF-010",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Configure anti-phishing protection",

        question:
            "Attackers are sending email that impersonates senior " +
            "executives. Which Defender for Office 365 capability should " +
            "you configure to help detect this behaviour?",

        options: [

            "Anti-phishing policies with impersonation protection",

            "Retention labels",

            "Microsoft Entra administrative units",

            "Azure Storage private endpoints"

        ],

        answer:
            [0],

        explanation:
            "Anti-phishing policies can include impersonation protection " +
            "for users and domains."

    },


    {

        id:
            "MS102-DEF-011",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage Microsoft Defender for Identity",

        question:
            "Which Defender product helps detect suspicious identity " +
            "activity involving supported on-premises Active Directory " +
            "Domain Services environments?",

        options: [

            "Microsoft Defender for Identity",

            "Microsoft Defender for Office 365",

            "Microsoft Purview Data Loss Prevention",

            "Microsoft Entra Access Reviews"

        ],

        answer:
            [0],

        explanation:
            "Defender for Identity analyses identity signals from supported " +
            "on-premises Active Directory environments."

    },


    {

        id:
            "MS102-DEF-012",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage Microsoft Defender for Cloud Apps",

        question:
            "You need visibility into unsanctioned cloud applications " +
            "being used by employees. Which product should you use?",

        options: [

            "Microsoft Defender for Cloud Apps",

            "Microsoft Defender Antivirus only",

            "Microsoft Purview Records Management",

            "Azure Load Balancer"

        ],

        answer:
            [0],

        explanation:
            "Defender for Cloud Apps provides cloud application discovery " +
            "and governance."

    },


    {

        id:
            "MS102-DEF-013",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage OAuth apps",

        question:
            "A third-party OAuth application has been granted suspicious " +
            "permissions in Microsoft 365. Which service can help " +
            "investigate and govern the application?",

        options: [

            "Microsoft Defender for Cloud Apps",

            "Azure Bastion",

            "Microsoft Purview Records Management",

            "Windows Autopilot"

        ],

        answer:
            [0],

        explanation:
            "Defender for Cloud Apps includes capabilities for identifying " +
            "and governing risky OAuth applications."

    },


    {

        id:
            "MS102-DEF-014",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Configure attack simulation training",

        question:
            "You want to run controlled phishing simulations to measure " +
            "user awareness and provide training to users who are susceptible. " +
            "Which Microsoft 365 capability should you use?",

        options: [

            "Attack Simulation Training",

            "Compliance Manager",

            "Microsoft Entra Connect",

            "Azure Advisor"

        ],

        answer:
            [0],

        explanation:
            "Attack Simulation Training allows organisations to run " +
            "simulated social-engineering campaigns and assign training."

    },


    {

        id:
            "MS102-DEF-015",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Automate investigation and response",

        question:
            "You want Microsoft Defender XDR to investigate supported " +
            "security alerts and perform automated remediation actions. " +
            "Which capability provides this?",

        options: [

            "Automated investigation and response",

            "Sensitivity labeling",

            "Message center",

            "Exchange retention tags"

        ],

        answer:
            [0],

        explanation:
            "Automated investigation and response can investigate alerts " +
            "and perform supported remediation actions."

    },


    {

        id:
            "MS102-DEF-016",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Use threat analytics",

        question:
            "Security administrators want Microsoft's analysis of major " +
            "active threat campaigns and recommendations for protecting " +
            "their environment. Which Defender XDR feature should they review?",

        options: [

            "Threat analytics",

            "Service health",

            "Microsoft Purview Data Map",

            "Azure Cost Management"

        ],

        answer:
            [0],

        explanation:
            "Threat analytics provides Microsoft security intelligence " +
            "about active and emerging threats."

    },


    {

        id:
            "MS102-DEF-017",

        domain:
            "defender",

        type:
            "multi",

        objective:
            "Manage Defender XDR incidents",

        question:
            "Which TWO activities are typical parts of investigating a " +
            "Microsoft Defender XDR incident?",

        options: [

            "Review correlated alerts and affected entities.",

            "Inspect evidence and remediation actions.",

            "Configure Microsoft 365 billing invoices.",

            "Create Azure subscriptions."

        ],

        answer:
            [0, 1],

        explanation:
            "Incident investigation typically involves reviewing alerts, " +
            "entities, evidence and remediation actions."

    },


    {

        id:
            "MS102-DEF-018",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Use security reports",

        question:
            "You need to understand trends in security alerts and " +
            "incidents across Microsoft Defender products. Where should " +
            "you review this information?",

        options: [

            "Microsoft Defender portal reports and incidents",

            "Microsoft 365 billing only",

            "Azure Pricing Calculator",

            "Windows Calculator"

        ],

        answer:
            [0],

        explanation:
            "The Microsoft Defender portal provides centralized security " +
            "incident, alert and reporting views."

    },


    {

        id:
            "MS102-DEF-019",

        domain:
            "defender",

        type:
            "single",

        objective:
            "Manage security posture",

        question:
            "You want recommendations for improving Microsoft 365 security " +
            "configuration and a score reflecting current security posture. " +
            "Which feature should you use?",

        options: [

            "Microsoft Secure Score",

            "Compliance score only",

            "Azure Pricing Calculator",

            "Microsoft 365 Message center"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Secure Score provides security improvement actions " +
            "and a measurement of security posture."

    },



    /*
     * ========================================================
     * DOMAIN 4
     * MANAGE COMPLIANCE USING MICROSOFT PURVIEW
     * 10 QUESTIONS
     * ========================================================
     */


    {

        id:
            "MS102-PURVIEW-001",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage sensitivity labels",

        question:
            "Documents containing confidential financial information " +
            "must display a Confidential classification and apply protection. " +
            "Which Microsoft Purview capability should you configure?",

        options: [

            "Sensitivity labels",

            "Microsoft Defender incidents",

            "Microsoft Entra access reviews",

            "Azure Network Security Groups"

        ],

        answer:
            [0],

        explanation:
            "Sensitivity labels classify and can protect Microsoft 365 data."

    },


    {

        id:
            "MS102-PURVIEW-002",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage Data Loss Prevention",

        question:
            "Users must be prevented from sending credit card numbers " +
            "to recipients outside the organisation. Which Microsoft " +
            "Purview capability should you configure?",

        options: [

            "Data Loss Prevention",

            "Microsoft Defender Vulnerability Management",

            "Microsoft Entra PIM",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "DLP policies identify and control the movement of sensitive data."

    },


    {

        id:
            "MS102-PURVIEW-003",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage sensitive information types",

        question:
            "A DLP policy must identify UK National Insurance numbers " +
            "inside Microsoft 365 content. Which type of Purview object " +
            "should the policy use to identify this data?",

        options: [

            "Sensitive information type",

            "Conditional Access policy",

            "Azure resource lock",

            "Defender incident"

        ],

        answer:
            [0],

        explanation:
            "Sensitive information types define patterns and evidence " +
            "used to identify sensitive data."

    },


    {

        id:
            "MS102-PURVIEW-004",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage retention",

        question:
            "Exchange Online and SharePoint content must be retained " +
            "for seven years regardless of whether users attempt to delete it. " +
            "Which capability should you configure?",

        options: [

            "Retention policies or retention labels",

            "Microsoft Defender for Endpoint",

            "Microsoft Entra Password Protection",

            "Azure Firewall"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Purview retention policies and labels govern " +
            "how long content must be retained or when it can be deleted."

    },


    {

        id:
            "MS102-PURVIEW-005",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage Records Management",

        question:
            "Certain documents must be formally declared and managed " +
            "as regulatory records. Which Microsoft Purview capability " +
            "is designed for this?",

        options: [

            "Records Management",

            "Microsoft Defender for Identity",

            "Microsoft Entra Connect Health",

            "Azure Service Health"

        ],

        answer:
            [0],

        explanation:
            "Records Management supports declaration and lifecycle " +
            "management of business and regulatory records."

    },


    {

        id:
            "MS102-PURVIEW-006",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage eDiscovery",

        question:
            "Legal staff need to preserve, search and review Microsoft 365 " +
            "content related to litigation. Which Purview solution " +
            "should they use?",

        options: [

            "eDiscovery",

            "Microsoft Defender XDR",

            "Microsoft Entra Conditional Access",

            "Azure Advisor"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Purview eDiscovery provides legal discovery " +
            "workflows including preservation and search."

    },


    {

        id:
            "MS102-PURVIEW-007",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage Insider Risk Management",

        question:
            "The organisation wants to identify risky employee behaviour " +
            "such as unusual downloading of sensitive files before resignation. " +
            "Which Purview solution should it evaluate?",

        options: [

            "Insider Risk Management",

            "Microsoft Defender Antivirus",

            "Azure DDoS Protection",

            "Microsoft Entra Connect"

        ],

        answer:
            [0],

        explanation:
            "Insider Risk Management correlates signals to help identify " +
            "potentially risky user behaviour involving organisational data."

    },


    {

        id:
            "MS102-PURVIEW-008",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage Communication Compliance",

        question:
            "Compliance staff need to detect potentially inappropriate " +
            "or policy-violating communications in supported Microsoft 365 " +
            "services. Which solution should they use?",

        options: [

            "Communication Compliance",

            "Azure Firewall",

            "Microsoft Defender for Endpoint",

            "Microsoft Entra Application Proxy"

        ],

        answer:
            [0],

        explanation:
            "Communication Compliance provides workflows for detecting " +
            "and reviewing potentially inappropriate communications."

    },


    {

        id:
            "MS102-PURVIEW-009",

        domain:
            "purview",

        type:
            "single",

        objective:
            "Manage Microsoft Purview Audit",

        question:
            "You need to determine which administrator changed a " +
            "Microsoft 365 configuration and when the change occurred. " +
            "Which Purview capability should you review?",

        options: [

            "Audit",

            "Sensitivity labels",

            "Microsoft Defender Antivirus",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Purview Audit records supported user and " +
            "administrator activities across Microsoft 365."

    },


    {

        id:
            "MS102-PURVIEW-010",

        domain:
            "purview",

        type:
            "multi",

        objective:
            "Manage Microsoft Purview compliance",

        question:
            "Which TWO Microsoft Purview capabilities help protect " +
            "sensitive organisational data?",

        options: [

            "Data Loss Prevention",

            "Sensitivity labels",

            "Azure Load Balancer",

            "Microsoft Entra Password Protection"

        ],

        answer:
            [0, 1],

        explanation:
            "DLP controls sensitive-data movement while sensitivity " +
            "labels classify and protect information."

    }

];



/*
 * ============================================================
 * RUNTIME VALIDATION
 * ============================================================
 */


(function validateMS102QuestionBank() {


    const domainCounts = {

        tenant:
            0,

        identity:
            0,

        defender:
            0,

        purview:
            0

    };


    const ids =
        new Set();


    /*
     * ========================================================
     * TOTAL QUESTION COUNT
     * ========================================================
     */


    if (
        MS102_QUESTIONS.length !==
        MS102_EXAM.questionCount
    ) {

        throw new Error(

            "MS-102 question-bank error: expected " +
            MS102_EXAM.questionCount +
            " questions but found " +
            MS102_QUESTIONS.length +
            "."

        );

    }


    /*
     * ========================================================
     * QUESTION VALIDATION
     * ========================================================
     */


    MS102_QUESTIONS.forEach(
        (question) => {


            if (
                !question.id ||
                typeof question.id !==
                "string"
            ) {

                throw new Error(
                    "MS-102 question-bank error: invalid question ID."
                );

            }


            if (
                ids.has(
                    question.id
                )
            ) {

                throw new Error(

                    "MS-102 question-bank error: duplicate ID " +
                    question.id

                );

            }


            ids.add(
                question.id
            );


            if (
                !Object.prototype.hasOwnProperty.call(
                    MS102_EXAM.domains,
                    question.domain
                )
            ) {

                throw new Error(

                    "MS-102 question-bank error: unknown domain " +
                    question.domain +
                    " on " +
                    question.id

                );

            }


            domainCounts[
                question.domain
            ]++;


            if (
                question.type !==
                "single" &&
                question.type !==
                "multi"
            ) {

                throw new Error(

                    "MS-102 question-bank error: unsupported type on " +
                    question.id

                );

            }


            if (
                !Array.isArray(
                    question.options
                ) ||
                question.options.length <
                2
            ) {

                throw new Error(

                    "MS-102 question-bank error: invalid options on " +
                    question.id

                );

            }


            if (
                !Array.isArray(
                    question.answer
                ) ||
                question.answer.length ===
                0
            ) {

                throw new Error(

                    "MS-102 question-bank error: missing answer on " +
                    question.id

                );

            }


            if (
                question.type ===
                "single" &&
                question.answer.length !==
                1
            ) {

                throw new Error(

                    "MS-102 question-bank error: single-answer question " +
                    question.id +
                    " has multiple answers."

                );

            }


            question.answer.forEach(
                (answerIndex) => {

                    if (
                        !Number.isInteger(
                            answerIndex
                        ) ||
                        answerIndex < 0 ||
                        answerIndex >=
                        question.options.length
                    ) {

                        throw new Error(

                            "MS-102 question-bank error: invalid answer index on " +
                            question.id

                        );

                    }

                }
            );

        }
    );


    /*
     * ========================================================
     * DOMAIN WEIGHTING
     * ========================================================
     */


    Object.entries(
        MS102_EXAM.domains
    ).forEach(
        (
            [
                domainId,
                domain
            ]
        ) => {


            const actual =
                domainCounts[
                    domainId
                ];


            const expected =
                domain.simulatorQuestions;


            if (
                actual !==
                expected
            ) {

                throw new Error(

                    "MS-102 weighting error for " +
                    domain.name +
                    ": expected " +
                    expected +
                    " questions but found " +
                    actual +
                    "."

                );

            }


            const percentage =

                (
                    actual /
                    MS102_EXAM.questionCount
                ) *
                100;


            if (
                percentage <
                domain.minWeight ||
                percentage >
                domain.maxWeight
            ) {

                throw new Error(

                    "MS-102 weighting error: " +
                    domain.name +
                    " is " +
                    percentage +
                    "% but Microsoft's published range is " +
                    domain.minWeight +
                    "–" +
                    domain.maxWeight +
                    "%."

                );

            }

        }
    );


    console.info(
        "[365in5] MS-102 question bank validated."
    );


    console.info(
        "[365in5] MS-102 weighting:",
        domainCounts
    );


})();



/*
 * ============================================================
 * EXPOSE TO GENERIC SIMULATOR
 * ============================================================
 */


window.EXAM_CONFIG =
    MS102_EXAM;


window.EXAM_QUESTIONS =
    MS102_QUESTIONS;
