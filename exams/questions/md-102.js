/*
 * ============================================================
 * 365in5 EXAM SIMULATOR
 * MD-102 — MANAGING AND SECURING MICROSOFT 365 ENDPOINTS
 *          BY USING INTUNE
 * ============================================================
 *
 * PURPOSE
 * -------
 * Configuration and original practice-question bank for the
 * 365in5 MD-102 simulator.
 *
 * CURRENT BLUEPRINT
 * -----------------
 * Skills measured:
 * 24 July 2026
 *
 * Microsoft published weighting:
 *
 * 1. Prepare infrastructure for devices
 *    20–25%
 *
 * 2. Manage and maintain devices
 *    25–30%
 *
 * 3. Protect devices
 *    15–20%
 *
 * 4. Manage and secure applications
 *    15–20%
 *
 * 5. Optimize endpoint operations by using automation,
 *    monitoring, and reporting
 *    10–15%
 *
 * 365in5 50-question allocation:
 *
 * Infrastructure:       11 = 22%
 * Device management:    14 = 28%
 * Device protection:     9 = 18%
 * Applications:          9 = 18%
 * Operations:            7 = 14%
 *
 * TOTAL:                50 = 100%
 *
 * IMPORTANT
 * ---------
 * These are original practice questions.
 *
 * They are NOT Microsoft exam questions and are NOT sourced
 * from exam dumps or leaked examination material.
 *
 * ============================================================
 */


"use strict";


/*
 * ============================================================
 * EXAM CONFIGURATION
 * ============================================================
 */


const MD102_EXAM = {

    id:
        "md-102",

    code:
        "MD-102",

    title:
        "Managing and Securing Microsoft 365 Endpoints by using Intune",

    category:
        "Microsoft 365",

    description:
        "Practice Microsoft Intune, Windows deployment, endpoint " +
        "management, security, applications, automation, monitoring " +
        "and reporting under simulated exam conditions.",

    blueprintVersion:
        "2026-07-24",

    blueprintLabel:
        "Skills measured as of 24 July 2026",

    questionCount:
        50,

    durationMinutes:
        100,

    simulatedPassingScore:
        700,


    /*
     * ========================================================
     * DOMAINS
     * ========================================================
     */


    domains: {


        infrastructure: {

            name:
                "Prepare infrastructure for devices",

            minWeight:
                20,

            maxWeight:
                25,

            simulatorQuestions:
                11

        },


        devices: {

            name:
                "Manage and maintain devices",

            minWeight:
                25,

            maxWeight:
                30,

            simulatorQuestions:
                14

        },


        protection: {

            name:
                "Protect devices",

            minWeight:
                15,

            maxWeight:
                20,

            simulatorQuestions:
                9

        },


        applications: {

            name:
                "Manage and secure applications",

            minWeight:
                15,

            maxWeight:
                20,

            simulatorQuestions:
                9

        },


        operations: {

            name:
                "Optimize endpoint operations by using automation, monitoring, and reporting",

            minWeight:
                10,

            maxWeight:
                15,

            simulatorQuestions:
                7

        }

    }

};



/*
 * ============================================================
 * QUESTION BANK
 * ============================================================
 */


const MD102_QUESTIONS = [


    /*
     * ========================================================
     * DOMAIN 1
     *
     * PREPARE INFRASTRUCTURE FOR DEVICES
     *
     * 11 QUESTIONS
     * 22%
     * ========================================================
     */


    {

        id:
            "MD102-INFRA-001",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Prepare Microsoft Intune for device management",

        question:
            "Your organisation has purchased Microsoft Intune licenses. " +
            "You need Windows devices to automatically enrol into Intune " +
            "when licensed users join the devices to Microsoft Entra ID. " +
            "What should you configure?",

        options: [

            "Automatic MDM enrolment scope",

            "Windows Update rings",

            "A device compliance policy",

            "An app protection policy"

        ],

        answer:
            [0],

        explanation:
            "Automatic MDM enrolment determines which Microsoft Entra " +
            "users automatically enrol eligible devices into Intune."

    },


    {

        id:
            "MD102-INFRA-002",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure device enrolment restrictions",

        question:
            "Your company permits employees to enrol corporate Windows " +
            "devices but wants to block personally owned Windows devices " +
            "from enrolling in Intune. What should you configure?",

        options: [

            "Device enrolment restrictions",

            "A Windows quality update policy",

            "An endpoint detection and response policy",

            "A security baseline"

        ],

        answer:
            [0],

        explanation:
            "Intune enrolment restrictions can control which platforms " +
            "and ownership types users are permitted to enrol."

    },


    {

        id:
            "MD102-INFRA-003",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure Windows Autopilot",

        question:
            "A company wants new Windows devices to be shipped directly " +
            "from the supplier to employees. During first sign-in, the " +
            "devices must automatically receive the organisation's " +
            "configuration without IT manually imaging them. Which " +
            "technology should you use?",

        options: [

            "Windows Autopilot",

            "Windows Server Update Services",

            "Azure Site Recovery",

            "Microsoft Defender for Cloud Apps"

        ],

        answer:
            [0],

        explanation:
            "Windows Autopilot provides cloud-driven provisioning of new " +
            "Windows devices without requiring traditional custom images."

    },


    {

        id:
            "MD102-INFRA-004",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure Windows Autopilot",

        question:
            "During Windows Autopilot deployment, users must be prevented " +
            "from reaching the desktop until required applications and " +
            "policies have been applied. What should you configure?",

        options: [

            "Enrollment Status Page",

            "Windows Update expedited updates",

            "Microsoft Defender Antivirus exclusions",

            "A device cleanup rule"

        ],

        answer:
            [0],

        explanation:
            "The Enrollment Status Page can track required setup actions " +
            "and block device use until specified policies and applications " +
            "are installed."

    },


    {

        id:
            "MD102-INFRA-005",

        domain:
            "infrastructure",

        type:
            "multi",

        objective:
            "Configure device join and registration",

        question:
            "Which TWO Microsoft Entra device states are commonly used " +
            "with modern Windows endpoint management?",

        options: [

            "Microsoft Entra joined",

            "Microsoft Entra hybrid joined",

            "Azure Storage joined",

            "Microsoft Purview joined"

        ],

        answer:
            [0, 1],

        explanation:
            "Windows endpoints can be Microsoft Entra joined or hybrid " +
            "joined depending on the organisation's identity architecture."

    },


    {

        id:
            "MD102-INFRA-006",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure Windows 365",

        question:
            "A remote contractor requires a corporate Windows desktop " +
            "that is hosted and managed in the Microsoft cloud. Which " +
            "service should you evaluate?",

        options: [

            "Windows 365",

            "Azure DNS",

            "Microsoft Purview eDiscovery",

            "Azure Data Box"

        ],

        answer:
            [0],

        explanation:
            "Windows 365 provides managed Cloud PCs that deliver a " +
            "Windows desktop from Microsoft's cloud."

    },


    {

        id:
            "MD102-INFRA-007",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure device categories",

        question:
            "You want users to select whether an enrolled device belongs " +
            "to Sales, Engineering or Finance so that Intune can use that " +
            "information for device organisation and targeting. What " +
            "should you configure?",

        options: [

            "Device categories",

            "Compliance notifications",

            "Windows feature update policies",

            "Microsoft Defender indicators"

        ],

        answer:
            [0],

        explanation:
            "Device categories allow devices to be classified during or " +
            "after enrolment and can be used with dynamic grouping and " +
            "administrative processes."

    },


    {

        id:
            "MD102-INFRA-008",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure groups for device management",

        question:
            "All Windows 11 corporate devices should automatically become " +
            "members of a group without administrators manually adding " +
            "each device. Which Microsoft Entra feature should you use?",

        options: [

            "Dynamic device group membership",

            "A static Microsoft 365 group",

            "An Azure resource lock",

            "A Log Analytics workspace"

        ],

        answer:
            [0],

        explanation:
            "Dynamic device groups automatically evaluate device " +
            "attributes and update group membership based on rules."

    },


    {

        id:
            "MD102-INFRA-009",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure enrolment profiles",

        question:
            "A fleet of shared iPads must enrol into Intune without " +
            "requiring each device to be associated with an individual " +
            "employee during setup. Which approach is most appropriate?",

        options: [

            "Use an appropriate automated device enrolment profile",

            "Require each device to use the administrator's personal Apple ID",

            "Configure Windows Autopilot",

            "Use Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Automated device enrolment mechanisms are designed for " +
            "corporate-owned Apple devices and can support scenarios where " +
            "user affinity is not required."

    },


    {

        id:
            "MD102-INFRA-010",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure administrative access to Intune",

        question:
            "A regional administrator should manage only devices assigned " +
            "to the European support team and should not manage devices in " +
            "other regions. Which Intune feature helps scope the resources " +
            "that administrator can manage?",

        options: [

            "Scope tags",

            "Windows Update rings",

            "App configuration policies",

            "Device compliance grace periods"

        ],

        answer:
            [0],

        explanation:
            "Scope tags can limit which Intune objects an administrator " +
            "can see and manage when used with Intune role assignments."

    },


    {

        id:
            "MD102-INFRA-011",

        domain:
            "infrastructure",

        type:
            "single",

        objective:
            "Configure Intune role-based administration",

        question:
            "A help-desk employee should remotely wipe devices but must " +
            "not be granted full Intune Administrator permissions. What " +
            "should you configure?",

        options: [

            "An Intune role with only the required permissions",

            "Global Administrator",

            "Microsoft Entra Global Reader",

            "Azure Subscription Owner"

        ],

        answer:
            [0],

        explanation:
            "Intune role-based access control should be used to grant only " +
            "the permissions necessary for the administrator's duties."

    },



    /*
     * ========================================================
     * DOMAIN 2
     *
     * MANAGE AND MAINTAIN DEVICES
     *
     * 14 QUESTIONS
     * 28%
     * ========================================================
     */


    {

        id:
            "MD102-DEVICE-001",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Configure device settings",

        question:
            "You need to deploy a password configuration to managed " +
            "Windows devices. Which Intune policy type is intended to " +
            "configure device operating-system settings?",

        options: [

            "Device configuration policy",

            "App protection policy",

            "Microsoft Purview retention policy",

            "Azure Policy assignment"

        ],

        answer:
            [0],

        explanation:
            "Intune configuration policies manage device settings such " +
            "as security, restrictions, networking and operating-system " +
            "configuration."

    },


    {

        id:
            "MD102-DEVICE-002",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Configure device compliance",

        question:
            "Corporate Windows devices must use BitLocker and have an " +
            "active firewall to be considered compliant. What should " +
            "you configure?",

        options: [

            "A device compliance policy",

            "A Microsoft 365 retention policy",

            "An Azure cost-management budget",

            "A Windows Autopilot profile only"

        ],

        answer:
            [0],

        explanation:
            "Device compliance policies define conditions that managed " +
            "devices must satisfy to be reported as compliant."

    },


    {

        id:
            "MD102-DEVICE-003",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Integrate compliance with Conditional Access",

        scenario:
            "A compliance policy marks devices that do not meet company " +
            "security requirements as noncompliant.",

        question:
            "You need to prevent users on noncompliant devices from " +
            "accessing Microsoft 365. Which additional technology should " +
            "you configure?",

        options: [

            "Microsoft Entra Conditional Access",

            "Azure Storage lifecycle management",

            "Windows Autopilot device preparation only",

            "Azure Resource Manager"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access can require a device to be marked " +
            "compliant by Intune before access to protected cloud " +
            "resources is granted."

    },


    {

        id:
            "MD102-DEVICE-004",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage Windows updates",

        question:
            "You need one group of Windows devices to receive monthly " +
            "quality updates several days before the wider organisation. " +
            "Which Intune feature should you configure?",

        options: [

            "Windows Update rings",

            "App protection policies",

            "Scope tags",

            "Device categories"

        ],

        answer:
            [0],

        explanation:
            "Windows Update rings allow administrators to configure update " +
            "behaviour, deferrals, deadlines and rollout timing."

    },


    {

        id:
            "MD102-DEVICE-005",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage Windows feature updates",

        question:
            "All supported Windows devices must remain on a specific " +
            "Windows feature release until the organisation approves a " +
            "newer release. What should you use?",

        options: [

            "Feature update policy",

            "Endpoint privilege management",

            "A managed app configuration policy",

            "A Microsoft Entra access review"

        ],

        answer:
            [0],

        explanation:
            "Feature update policies can target devices with a specific " +
            "Windows feature release and control movement to newer releases."

    },


    {

        id:
            "MD102-DEVICE-006",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Expedite Windows quality updates",

        question:
            "Microsoft releases an urgent security update. You need " +
            "managed Windows devices to install the update as quickly as " +
            "possible rather than waiting for the normal update schedule. " +
            "What should you configure?",

        options: [

            "An expedited quality update policy",

            "A feature update deferral",

            "An app configuration policy",

            "A device category"

        ],

        answer:
            [0],

        explanation:
            "Expedited quality update policies are intended to accelerate " +
            "deployment of important Windows quality updates."

    },


    {

        id:
            "MD102-DEVICE-007",

        domain:
            "devices",

        type:
            "multi",

        objective:
            "Perform remote device actions",

        question:
            "Which TWO are examples of remote actions that can be " +
            "performed against supported managed devices from Intune?",

        options: [

            "Wipe",

            "Retire",

            "Create an Azure subscription",

            "Create a Microsoft 365 tenant"

        ],

        answer:
            [0, 1],

        explanation:
            "Intune supports remote management actions including wipe " +
            "and retire for supported enrolled devices."

    },


    {

        id:
            "MD102-DEVICE-008",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Retire managed devices",

        question:
            "An employee leaves the company but owns the smartphone used " +
            "for work. You want to remove corporate Intune-managed data " +
            "without performing a full factory reset. Which action is " +
            "generally more appropriate?",

        options: [

            "Retire",

            "Wipe",

            "Fresh Start",

            "Autopilot Reset"

        ],

        answer:
            [0],

        explanation:
            "Retire removes managed corporate data and management settings " +
            "while preserving the user's personal device data where the " +
            "platform and management scenario support it."

    },


    {

        id:
            "MD102-DEVICE-009",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage device compliance",

        question:
            "A device becomes noncompliant. You want to allow the user " +
            "three days to correct the issue before Intune treats the " +
            "noncompliance as immediately actionable. What should you " +
            "configure?",

        options: [

            "A grace period in the compliance policy actions",

            "A resource lock",

            "A Windows Autopilot deployment profile",

            "A Microsoft Purview sensitivity label"

        ],

        answer:
            [0],

        explanation:
            "Compliance policy actions can define when a device is marked " +
            "noncompliant and provide grace periods before additional " +
            "actions occur."

    },


    {

        id:
            "MD102-DEVICE-010",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Configure configuration profiles",

        question:
            "You need to deploy Microsoft Edge settings to Windows " +
            "devices using a catalogue of available policy settings. " +
            "Which Intune configuration experience should you consider?",

        options: [

            "Settings catalog",

            "Device cleanup rules",

            "Microsoft Defender incidents",

            "Tenant attach"

        ],

        answer:
            [0],

        explanation:
            "The Intune Settings catalog provides granular access to a " +
            "large collection of configurable device settings."

    },


    {

        id:
            "MD102-DEVICE-011",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage local administrators",

        question:
            "You need to manage membership of the local Administrators " +
            "group on managed Windows devices centrally through Intune. " +
            "Which capability should you evaluate?",

        options: [

            "Account protection policies",

            "Blob lifecycle management",

            "Azure DNS private zones",

            "Microsoft Purview Records Management"

        ],

        answer:
            [0],

        explanation:
            "Intune endpoint security account-protection capabilities can " +
            "manage local users and group membership on supported devices."

    },


    {

        id:
            "MD102-DEVICE-012",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage device configuration conflicts",

        question:
            "Two Intune configuration policies target the same device " +
            "and configure the same setting differently. What should an " +
            "administrator review to determine how the setting is being " +
            "applied?",

        options: [

            "Per-setting and device configuration status",

            "Azure Cost Management",

            "Microsoft Purview Data Explorer",

            "Azure Resource Graph only"

        ],

        answer:
            [0],

        explanation:
            "Intune reporting for configuration profiles and individual " +
            "settings helps identify conflicts, errors and the policies " +
            "targeting a device."

    },


    {

        id:
            "MD102-DEVICE-013",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage device lifecycle",

        question:
            "Old Intune device records should automatically be removed " +
            "after they have not checked in for a defined period. Which " +
            "feature should you configure?",

        options: [

            "Device cleanup rules",

            "Windows Update rings",

            "App protection policy",

            "Microsoft Entra Conditional Access"

        ],

        answer:
            [0],

        explanation:
            "Intune device cleanup rules can automatically remove stale " +
            "device records after a configured period of inactivity."

    },


    {

        id:
            "MD102-DEVICE-014",

        domain:
            "devices",

        type:
            "single",

        objective:
            "Manage Windows device configuration",

        question:
            "You need to deploy a Wi-Fi configuration, including the SSID " +
            "and security settings, to managed Windows laptops. Which " +
            "approach should you use?",

        options: [

            "Deploy a Wi-Fi configuration profile from Intune",

            "Create a Microsoft Purview DLP policy",

            "Create an Azure Monitor workbook",

            "Create an Exchange transport rule"

        ],

        answer:
            [0],

        explanation:
            "Intune configuration profiles can centrally deploy Wi-Fi " +
            "network settings to supported managed devices."

    },



    /*
     * ========================================================
     * DOMAIN 3
     *
     * PROTECT DEVICES
     *
     * 9 QUESTIONS
     * 18%
     * ========================================================
     */


    {

        id:
            "MD102-PROTECT-001",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Configure Microsoft Defender Antivirus",

        question:
            "You need to centrally configure Microsoft Defender Antivirus " +
            "real-time protection settings on Intune-managed Windows " +
            "devices. Which Intune area should you use?",

        options: [

            "Endpoint security Antivirus policies",

            "Windows Autopilot device profiles",

            "App configuration policies",

            "Device categories"

        ],

        answer:
            [0],

        explanation:
            "Intune endpoint security Antivirus policies manage Microsoft " +
            "Defender Antivirus settings on supported devices."

    },


    {

        id:
            "MD102-PROTECT-002",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Configure disk encryption",

        question:
            "Windows laptops must encrypt their operating-system drives " +
            "using Microsoft's native full-volume encryption technology. " +
            "Which technology should you configure?",

        options: [

            "BitLocker",

            "Windows Sandbox",

            "Azure Files",

            "Microsoft Purview Audit"

        ],

        answer:
            [0],

        explanation:
            "BitLocker provides full-volume encryption for Windows and " +
            "can be managed through Intune endpoint security policies."

    },


    {

        id:
            "MD102-PROTECT-003",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Configure Microsoft Defender for Endpoint",

        question:
            "You want Intune to use machine-risk information from " +
            "Microsoft Defender for Endpoint when evaluating device " +
            "compliance. What integration should you configure?",

        options: [

            "Microsoft Defender for Endpoint connector",

            "Azure Storage private endpoint",

            "Microsoft Purview Information Protection scanner",

            "Windows Autopilot Reset"

        ],

        answer:
            [0],

        explanation:
            "Integrating Defender for Endpoint with Intune allows " +
            "device-risk information to participate in compliance and " +
            "Conditional Access scenarios."

    },


    {

        id:
            "MD102-PROTECT-004",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Configure attack surface reduction",

        question:
            "You need to reduce the likelihood that Office applications " +
            "can create child processes on corporate Windows devices. " +
            "Which security capability should you evaluate?",

        options: [

            "Attack surface reduction rules",

            "Device categories",

            "Windows feature update policies",

            "Azure Cost Management"

        ],

        answer:
            [0],

        explanation:
            "Attack surface reduction rules can block or audit behaviour " +
            "commonly associated with malicious activity, including " +
            "specific Office process behaviours."

    },


    {

        id:
            "MD102-PROTECT-005",

        domain:
            "protection",

        type:
            "multi",

        objective:
            "Configure endpoint security",

        question:
            "Which TWO security capabilities can be managed through " +
            "Intune endpoint security policies?",

        options: [

            "Firewall",

            "Disk encryption",

            "Azure subscription billing",

            "Exchange mailbox quotas"

        ],

        answer:
            [0, 1],

        explanation:
            "Intune endpoint security includes policy areas for Windows " +
            "Firewall and disk encryption among other endpoint controls."

    },


    {

        id:
            "MD102-PROTECT-006",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Manage Windows Firewall",

        question:
            "You need to deploy Windows Firewall settings to managed " +
            "devices without creating a traditional Group Policy Object. " +
            "What should you use?",

        options: [

            "Intune endpoint security Firewall policy",

            "Microsoft Entra access review",

            "Azure resource lock",

            "Microsoft Purview retention label"

        ],

        answer:
            [0],

        explanation:
            "Endpoint security Firewall policies allow Windows Firewall " +
            "settings to be centrally configured through Intune."

    },


    {

        id:
            "MD102-PROTECT-007",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Configure security baselines",

        question:
            "You want to quickly apply a Microsoft-recommended collection " +
            "of security settings to Windows endpoints and then customise " +
            "individual settings where required. What should you deploy?",

        options: [

            "An Intune security baseline",

            "A Windows Autopilot hardware hash",

            "A device category",

            "An Azure Policy initiative"

        ],

        answer:
            [0],

        explanation:
            "Intune security baselines provide Microsoft-recommended " +
            "groups of endpoint security settings that administrators can " +
            "deploy and customise."

    },


    {

        id:
            "MD102-PROTECT-008",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Configure endpoint privilege management",

        question:
            "Standard users sometimes need to run an approved application " +
            "with elevated privileges, but you do not want to make those " +
            "users permanent local administrators. Which Intune Suite " +
            "capability is designed for this scenario?",

        options: [

            "Endpoint Privilege Management",

            "Windows Update for Business",

            "Device cleanup rules",

            "Microsoft Purview eDiscovery"

        ],

        answer:
            [0],

        explanation:
            "Endpoint Privilege Management supports controlled elevation " +
            "of approved processes without requiring permanent local " +
            "administrator rights."

    },


    {

        id:
            "MD102-PROTECT-009",

        domain:
            "protection",

        type:
            "single",

        objective:
            "Respond to compromised devices",

        question:
            "A Windows endpoint is believed to be compromised. You want " +
            "to restrict its communication with other devices while " +
            "maintaining connectivity required for Defender investigation. " +
            "Which Defender for Endpoint action should you consider?",

        options: [

            "Isolate device",

            "Autopilot Reset",

            "Retire",

            "Feature update rollback"

        ],

        answer:
            [0],

        explanation:
            "Device isolation in Defender for Endpoint can restrict a " +
            "compromised machine's network communication while supporting " +
            "security-response workflows."

    },



    /*
     * ========================================================
     * DOMAIN 4
     *
     * MANAGE AND SECURE APPLICATIONS
     *
     * 9 QUESTIONS
     * 18%
     * ========================================================
     */


    {

        id:
            "MD102-APP-001",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Deploy applications",

        question:
            "You need to deploy a packaged Windows desktop application " +
            "to Intune-managed devices and require detection rules, " +
            "dependencies and install commands. Which app type is " +
            "typically appropriate?",

        options: [

            "Win32 app",

            "Web link only",

            "Microsoft Entra enterprise application only",

            "Azure Function"

        ],

        answer:
            [0],

        explanation:
            "Intune Win32 app deployment supports packaged desktop " +
            "applications with detection rules, requirements, dependencies " +
            "and installation commands."

    },


    {

        id:
            "MD102-APP-002",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Assign applications",

        question:
            "Microsoft Company Portal must automatically install on every " +
            "corporate Windows device in Group1. Which assignment intent " +
            "should you use?",

        options: [

            "Required",

            "Available for enrolled devices",

            "Uninstall",

            "Featured"

        ],

        answer:
            [0],

        explanation:
            "A Required assignment instructs Intune to install the app " +
            "automatically on targeted users or devices."

    },


    {

        id:
            "MD102-APP-003",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Provide self-service applications",

        question:
            "Users should be able to choose whether to install an approved " +
            "application from Company Portal. Which assignment intent " +
            "should you configure?",

        options: [

            "Available for enrolled devices",

            "Required",

            "Uninstall",

            "Block"

        ],

        answer:
            [0],

        explanation:
            "Available assignments expose applications in Company Portal " +
            "for optional self-service installation."

    },


    {

        id:
            "MD102-APP-004",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Configure mobile application management",

        question:
            "Employees access corporate Microsoft 365 data from personal " +
            "mobile devices that are not enrolled into Intune. You need " +
            "to restrict copying company data into unmanaged personal apps. " +
            "What should you configure?",

        options: [

            "An app protection policy",

            "A Windows feature update policy",

            "An Azure route table",

            "A BitLocker recovery policy"

        ],

        answer:
            [0],

        explanation:
            "Intune app protection policies can protect organisational " +
            "data inside supported applications even when the device " +
            "itself is not enrolled."

    },


    {

        id:
            "MD102-APP-005",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Configure managed app settings",

        question:
            "You need to preconfigure a supported mobile application " +
            "with organisation-specific settings when users launch it. " +
            "Which Intune feature should you use?",

        options: [

            "App configuration policy",

            "Device cleanup rule",

            "Security baseline",

            "Windows quality update policy"

        ],

        answer:
            [0],

        explanation:
            "App configuration policies can deliver configuration values " +
            "to supported managed applications."

    },


    {

        id:
            "MD102-APP-006",

        domain:
            "applications",

        type:
            "multi",

        objective:
            "Protect organisational application data",

        question:
            "Which TWO controls can commonly be implemented with an " +
            "Intune app protection policy for supported applications?",

        options: [

            "Require a PIN to access corporate app data",

            "Restrict transferring corporate data to unmanaged apps",

            "Create an Azure subscription",

            "Resize an Azure virtual machine"

        ],

        answer:
            [0, 1],

        explanation:
            "App protection policies can require access controls such as " +
            "PINs and restrict transfer of managed organisational data."

    },


    {

        id:
            "MD102-APP-007",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Manage Microsoft 365 Apps",

        question:
            "You need to deploy Microsoft 365 Apps to managed Windows " +
            "devices from Intune. Which built-in Intune application type " +
            "is designed for this?",

        options: [

            "Microsoft 365 Apps for Windows",

            "Azure managed disk",

            "Microsoft Purview solution",

            "Windows Autopilot profile"

        ],

        answer:
            [0],

        explanation:
            "Intune provides a Microsoft 365 Apps application type for " +
            "deploying and configuring Microsoft 365 desktop apps."

    },


    {

        id:
            "MD102-APP-008",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Manage application deployment",

        question:
            "App1 must install only after Framework1 has successfully " +
            "installed on the same device. Which Win32 app feature should " +
            "you configure?",

        options: [

            "Dependency",

            "Supersedence only",

            "Scope tag",

            "Compliance grace period"

        ],

        answer:
            [0],

        explanation:
            "Win32 application dependencies specify applications that must " +
            "be installed before another application is installed."

    },


    {

        id:
            "MD102-APP-009",

        domain:
            "applications",

        type:
            "single",

        objective:
            "Replace applications",

        question:
            "AppV2 should replace AppV1 on managed Windows endpoints and " +
            "the old version should be removed as part of the deployment. " +
            "Which Win32 application capability should you configure?",

        options: [

            "Supersedence",

            "Device compliance",

            "Enrollment Status Page",

            "Conditional Access"

        ],

        answer:
            [0],

        explanation:
            "Win32 app supersedence defines relationships between newer " +
            "and older applications and can be configured to replace the " +
            "superseded app."

    },



    /*
     * ========================================================
     * DOMAIN 5
     *
     * OPTIMIZE ENDPOINT OPERATIONS BY USING AUTOMATION,
     * MONITORING, AND REPORTING
     *
     * 7 QUESTIONS
     * 14%
     * ========================================================
     */


    {

        id:
            "MD102-OPS-001",

        domain:
            "operations",

        type:
            "single",

        objective:
            "Use Intune reports",

        question:
            "You deployed a configuration profile and need to determine " +
            "which devices successfully received it and which devices " +
            "reported errors. What should you review?",

        options: [

            "The profile's device and user status reports",

            "Azure Cost Management",

            "Microsoft Purview eDiscovery",

            "Microsoft Entra application proxy"

        ],

        answer:
            [0],

        explanation:
            "Intune configuration profiles provide status reporting that " +
            "shows successful, failed, pending and conflicting deployments."

    },


    {

        id:
            "MD102-OPS-002",

        domain:
            "operations",

        type:
            "single",

        objective:
            "Monitor endpoint health",

        question:
            "You want visibility into startup performance, application " +
            "reliability and user experience across managed endpoints. " +
            "Which Intune capability should you evaluate?",

        options: [

            "Endpoint analytics",

            "Windows Autopilot device hash",

            "Scope tags",

            "Azure Service Bus"

        ],

        answer:
            [0],

        explanation:
            "Endpoint analytics provides insight into endpoint performance " +
            "and user experience, including startup and application metrics."

    },


    {

        id:
            "MD102-OPS-003",

        domain:
            "operations",

        type:
            "single",

        objective:
            "Use remediation capabilities",

        question:
            "You need Intune to regularly detect whether a Windows device " +
            "has an incorrect configuration and run a PowerShell script " +
            "to correct the issue automatically. Which capability should " +
            "you use?",

        options: [

            "Remediations",

            "Windows Autopilot Reset",

            "App protection policy",

            "Microsoft Purview Audit"

        ],

        answer:
            [0],

        explanation:
            "Intune Remediations use detection and remediation scripts to " +
            "identify and automatically correct supported endpoint issues."

    },


    {

        id:
            "MD102-OPS-004",

        domain:
            "operations",

        type:
            "multi",

        objective:
            "Automate endpoint management",

        question:
            "Which TWO tools can an endpoint administrator use to automate " +
            "Microsoft 365 endpoint-management tasks?",

        options: [

            "PowerShell",

            "Microsoft Graph",

            "Azure Data Box",

            "Microsoft Purview Data Map"

        ],

        answer:
            [0, 1],

        explanation:
            "PowerShell and Microsoft Graph are key automation interfaces " +
            "for Microsoft 365 and Intune administration."

    },


    {

        id:
            "MD102-OPS-005",

        domain:
            "operations",

        type:
            "single",

        objective:
            "Monitor application deployment",

        question:
            "Users report that App1 has not installed successfully on " +
            "several devices. Which source should you review first to " +
            "determine installation status across targeted devices?",

        options: [

            "The Intune application installation status reports",

            "Microsoft Entra risky-user report",

            "Azure Advisor",

            "Microsoft Purview Content Explorer"

        ],

        answer:
            [0],

        explanation:
            "Intune application reporting shows installation status for " +
            "targeted users and devices and helps identify failed installs."

    },


    {

        id:
            "MD102-OPS-006",

        domain:
            "operations",

        type:
            "single",

        objective:
            "Use Microsoft Graph",

        question:
            "You need a custom automation service to query managed-device " +
            "information from Intune programmatically. Which Microsoft API " +
            "should you use?",

        options: [

            "Microsoft Graph",

            "Azure DNS REST endpoint only",

            "Windows Update Catalog",

            "Microsoft Purview Message Encryption"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Graph provides APIs for Microsoft 365 services, " +
            "including Intune device-management data and operations."

    },


    {

        id:
            "MD102-OPS-007",

        domain:
            "operations",

        type:
            "single",

        objective:
            "Troubleshoot managed endpoints",

        scenario:
            "User1 reports that a policy is not applying to Device1. " +
            "The device is enrolled in Intune and recently checked in.",

        question:
            "Which approach gives you the most useful starting point for " +
            "investigating which policies and applications are targeted " +
            "to that specific user and device?",

        options: [

            "Use Intune troubleshooting and support information for the user and device.",

            "Delete the Microsoft 365 tenant.",

            "Create a new Azure subscription.",

            "Disable Microsoft Defender Antivirus."

        ],

        answer:
            [0],

        explanation:
            "Intune troubleshooting views help administrators inspect " +
            "user/device relationships, targeted policies, applications " +
            "and deployment status when diagnosing endpoint-management " +
            "issues."

    }

];



/*
 * ============================================================
 * RUNTIME VALIDATION
 * ============================================================
 */


(function validateMD102QuestionBank() {


    const domainCounts = {

        infrastructure:
            0,

        devices:
            0,

        protection:
            0,

        applications:
            0,

        operations:
            0

    };


    const questionIds =
        new Set();


    /*
     * ========================================================
     * TOTAL COUNT
     * ========================================================
     */


    if (
        MD102_QUESTIONS.length !==
        MD102_EXAM.questionCount
    ) {

        throw new Error(

            "MD-102 question-bank error: expected " +
            MD102_EXAM.questionCount +
            " questions but found " +
            MD102_QUESTIONS.length +
            "."

        );

    }


    /*
     * ========================================================
     * QUESTIONS
     * ========================================================
     */


    MD102_QUESTIONS.forEach(
        (question) => {


            /*
             * ID validation.
             */


            if (
                !question.id ||
                typeof question.id !==
                "string"
            ) {

                throw new Error(
                    "MD-102 question-bank error: invalid question ID."
                );

            }


            /*
             * Duplicate IDs.
             */


            if (
                questionIds.has(
                    question.id
                )
            ) {

                throw new Error(

                    "MD-102 question-bank error: duplicate ID " +
                    question.id

                );

            }


            questionIds.add(
                question.id
            );


            /*
             * Domain.
             */


            if (
                !Object.prototype.hasOwnProperty.call(
                    MD102_EXAM.domains,
                    question.domain
                )
            ) {

                throw new Error(

                    "MD-102 question-bank error: unknown domain " +
                    question.domain +
                    " on " +
                    question.id

                );

            }


            domainCounts[
                question.domain
            ]++;


            /*
             * Type.
             */


            if (
                question.type !==
                "single" &&
                question.type !==
                "multi"
            ) {

                throw new Error(

                    "MD-102 question-bank error: unsupported type on " +
                    question.id

                );

            }


            /*
             * Options.
             */


            if (
                !Array.isArray(
                    question.options
                ) ||
                question.options.length <
                2
            ) {

                throw new Error(

                    "MD-102 question-bank error: invalid options on " +
                    question.id

                );

            }


            /*
             * Answer.
             */


            if (
                !Array.isArray(
                    question.answer
                ) ||
                question.answer.length ===
                0
            ) {

                throw new Error(

                    "MD-102 question-bank error: missing answer on " +
                    question.id

                );

            }


            /*
             * Single-choice validation.
             */


            if (
                question.type ===
                "single" &&
                question.answer.length !==
                1
            ) {

                throw new Error(

                    "MD-102 question-bank error: single-answer question " +
                    question.id +
                    " has multiple answers."

                );

            }


            /*
             * Answer indexes.
             */


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

                            "MD-102 question-bank error: invalid answer index on " +
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
        MD102_EXAM.domains
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

                    "MD-102 weighting error for " +
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
                    MD102_EXAM.questionCount
                ) *
                100;


            if (
                percentage <
                domain.minWeight ||
                percentage >
                domain.maxWeight
            ) {

                throw new Error(

                    "MD-102 weighting error: " +
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
        "[365in5] MD-102 question bank validated."
    );


    console.info(
        "[365in5] MD-102 weighting:",
        domainCounts
    );


})();



/*
 * ============================================================
 * EXPOSE EXAM DATA
 * ============================================================
 */


window.EXAM_CONFIG =
    MD102_EXAM;


window.EXAM_QUESTIONS =
    MD102_QUESTIONS;
