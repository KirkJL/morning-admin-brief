/*
 * ============================================================
 * 365in5 EXAM SIMULATOR
 * AZ-900 — MICROSOFT AZURE FUNDAMENTALS
 * ============================================================
 *
 * CURRENT BLUEPRINT
 * -----------------
 * Skills measured as of:
 * 20 July 2026
 *
 * Microsoft published weighting:
 *
 * 1. Describe cloud concepts
 *    25–30%
 *
 * 2. Describe Azure architecture and services
 *    35–40%
 *
 * 3. Describe Azure management and governance
 *    30–35%
 *
 * 365in5 50-question allocation:
 *
 * Cloud concepts:                  14 = 28%
 * Azure architecture/services:     19 = 38%
 * Management/governance:           17 = 34%
 *
 * TOTAL:                           50 = 100%
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


const AZ900_EXAM = {

    id:
        "az-900",

    code:
        "AZ-900",

    title:
        "Microsoft Azure Fundamentals",

    category:
        "Microsoft Azure",

    description:
        "Practice cloud concepts, Azure architecture, compute, " +
        "networking, storage, identity, security, governance, cost " +
        "management, deployment and monitoring fundamentals.",

    blueprintVersion:
        "2026-07-20",

    blueprintLabel:
        "Skills measured as of 20 July 2026",

    questionCount:
        50,

    durationMinutes:
        45,

    simulatedPassingScore:
        700,


    domains: {


        cloud: {

            name:
                "Describe cloud concepts",

            minWeight:
                25,

            maxWeight:
                30,

            simulatorQuestions:
                14

        },


        architecture: {

            name:
                "Describe Azure architecture and services",

            minWeight:
                35,

            maxWeight:
                40,

            simulatorQuestions:
                19

        },


        governance: {

            name:
                "Describe Azure management and governance",

            minWeight:
                30,

            maxWeight:
                35,

            simulatorQuestions:
                17

        }

    }

};



const AZ900_QUESTIONS = [


    /*
     * ========================================================
     * DOMAIN 1
     * DESCRIBE CLOUD CONCEPTS
     * 14 QUESTIONS
     * ========================================================
     */


    {

        id:
            "AZ900-CLOUD-001",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Define cloud computing",

        question:
            "Which statement best describes cloud computing?",

        options: [

            "Delivery of computing services over a network using on-demand resources.",

            "A requirement to own all physical servers used by an application.",

            "A type of local-only desktop operating system.",

            "A method of storing data only on removable media."

        ],

        answer:
            [0],

        explanation:
            "Cloud computing delivers computing resources such as servers, " +
            "storage, networking and applications on demand."

    },


    {

        id:
            "AZ900-CLOUD-002",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe the shared responsibility model",

        question:
            "An organisation hosts virtual machines in Azure. Who is " +
            "responsible for securing the guest operating system?",

        options: [

            "The customer.",

            "Microsoft only.",

            "The internet service provider.",

            "No one because the VM is in the cloud."

        ],

        answer:
            [0],

        explanation:
            "For Azure virtual machines, Microsoft secures the underlying " +
            "cloud infrastructure while the customer remains responsible " +
            "for the guest operating system and workload configuration."

    },


    {

        id:
            "AZ900-CLOUD-003",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe public cloud",

        question:
            "Which cloud model uses infrastructure owned and operated " +
            "by a cloud service provider and shared across customers?",

        options: [

            "Public cloud",

            "Private cloud",

            "Local datacenter",

            "Offline cloud"

        ],

        answer:
            [0],

        explanation:
            "Public cloud resources are owned and operated by a cloud " +
            "provider and delivered to multiple customers."

    },


    {

        id:
            "AZ900-CLOUD-004",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe private cloud",

        question:
            "Which cloud model provides cloud infrastructure dedicated " +
            "to a single organisation?",

        options: [

            "Private cloud",

            "Public cloud",

            "Community forum",

            "Content delivery network"

        ],

        answer:
            [0],

        explanation:
            "A private cloud is dedicated to one organisation."

    },


    {

        id:
            "AZ900-CLOUD-005",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe hybrid cloud",

        question:
            "A company runs some applications in its own datacenter and " +
            "others in Azure. Which cloud model does this represent?",

        options: [

            "Hybrid cloud",

            "Public cloud only",

            "Private cloud only",

            "Serverless only"

        ],

        answer:
            [0],

        explanation:
            "Hybrid cloud combines private or on-premises infrastructure " +
            "with public cloud services."

    },


    {

        id:
            "AZ900-CLOUD-006",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe consumption-based pricing",

        question:
            "What is a major characteristic of a consumption-based " +
            "cloud pricing model?",

        options: [

            "Customers generally pay according to the resources they consume.",

            "Customers must buy all datacenter hardware upfront.",

            "All services have one fixed lifetime cost.",

            "Resources cannot be scaled after purchase."

        ],

        answer:
            [0],

        explanation:
            "Consumption-based pricing aligns cost with resource usage."

    },


    {

        id:
            "AZ900-CLOUD-007",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe scalability",

        question:
            "A web application receives significantly more traffic and " +
            "Azure adds additional resources to support the workload. " +
            "Which cloud benefit is demonstrated?",

        options: [

            "Scalability",

            "Data residency",

            "Federation",

            "Compliance auditing"

        ],

        answer:
            [0],

        explanation:
            "Scalability allows resources to increase or decrease " +
            "to meet workload demand."

    },


    {

        id:
            "AZ900-CLOUD-008",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe elasticity",

        question:
            "A cloud workload automatically increases capacity during a " +
            "sales event and reduces capacity when demand falls. Which " +
            "concept does this best demonstrate?",

        options: [

            "Elasticity",

            "Static provisioning",

            "Data classification",

            "Federation"

        ],

        answer:
            [0],

        explanation:
            "Elasticity describes automatically adjusting resources " +
            "according to changing demand."

    },


    {

        id:
            "AZ900-CLOUD-009",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe high availability",

        question:
            "What is the primary goal of high availability?",

        options: [

            "Keep services accessible despite failures or disruptions.",

            "Reduce all application costs to zero.",

            "Eliminate the need for authentication.",

            "Store every workload in one datacenter."

        ],

        answer:
            [0],

        explanation:
            "High availability focuses on maintaining service availability " +
            "when components fail."

    },


    {

        id:
            "AZ900-CLOUD-010",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe IaaS",

        question:
            "Which cloud service model gives the customer the greatest " +
            "control over virtual machines and their operating systems?",

        options: [

            "Infrastructure as a Service",

            "Platform as a Service",

            "Software as a Service",

            "Business Process as a Service"

        ],

        answer:
            [0],

        explanation:
            "IaaS provides virtualized infrastructure while customers " +
            "retain responsibility for operating systems and applications."

    },


    {

        id:
            "AZ900-CLOUD-011",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe PaaS",

        question:
            "A developer wants to deploy a web application without " +
            "managing the underlying operating system. Which service " +
            "model is generally most appropriate?",

        options: [

            "Platform as a Service",

            "Infrastructure as a Service only",

            "Private datacenter hardware",

            "Desktop as removable media"

        ],

        answer:
            [0],

        explanation:
            "PaaS abstracts much of the infrastructure and operating-system " +
            "management from application developers."

    },


    {

        id:
            "AZ900-CLOUD-012",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe SaaS",

        question:
            "Microsoft 365 is an example of which cloud service model?",

        options: [

            "Software as a Service",

            "Infrastructure as a Service",

            "Network as a Service only",

            "Private cloud hardware"

        ],

        answer:
            [0],

        explanation:
            "SaaS delivers complete applications that customers consume " +
            "without managing the underlying platform."

    },


    {

        id:
            "AZ900-CLOUD-013",

        domain:
            "cloud",

        type:
            "single",

        objective:
            "Describe serverless",

        question:
            "Which statement best describes serverless computing?",

        options: [

            "Developers run code without directly managing the servers that execute it.",

            "Servers do not physically exist.",

            "Applications cannot use networking.",

            "The customer must manually patch every host machine."

        ],

        answer:
            [0],

        explanation:
            "Serverless computing abstracts server management while " +
            "allowing code to execute based on demand or events."

    },


    {

        id:
            "AZ900-CLOUD-014",

        domain:
            "cloud",

        type:
            "multi",

        objective:
            "Describe benefits of cloud services",

        question:
            "Which TWO are common benefits of cloud computing?",

        options: [

            "Rapid scalability",

            "Consumption-based pricing",

            "A requirement to purchase all infrastructure upfront",

            "A guarantee that applications never fail"

        ],

        answer:
            [0, 1],

        explanation:
            "Cloud computing commonly provides scalable resources and " +
            "usage-based pricing. It does not eliminate all failures."

    },



    /*
     * ========================================================
     * DOMAIN 2
     * AZURE ARCHITECTURE AND SERVICES
     * 19 QUESTIONS
     * ========================================================
     */


    {

        id:
            "AZ900-ARCH-001",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure regions",

        question:
            "What is an Azure region?",

        options: [

            "A geographic area containing one or more datacenters.",

            "A single virtual machine.",

            "A billing account only.",

            "A Microsoft Entra user group."

        ],

        answer:
            [0],

        explanation:
            "Azure regions are geographic areas containing one or more " +
            "datacenters connected by low-latency networking."

    },


    {

        id:
            "AZ900-ARCH-002",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe availability zones",

        question:
            "What is the purpose of Azure availability zones?",

        options: [

            "Provide physically separate datacenter locations within an Azure region.",

            "Create Microsoft Entra user groups.",

            "Store billing invoices.",

            "Replace Azure subscriptions."

        ],

        answer:
            [0],

        explanation:
            "Availability zones provide separate datacenter groups " +
            "within a region to improve resiliency."

    },


    {

        id:
            "AZ900-ARCH-003",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe resource groups",

        question:
            "What is the primary purpose of an Azure resource group?",

        options: [

            "Provide a logical container for Azure resources.",

            "Provide a physical datacenter.",

            "Replace Microsoft Entra ID.",

            "Provide internet connectivity only."

        ],

        answer:
            [0],

        explanation:
            "Resource groups logically contain and organize Azure resources."

    },


    {

        id:
            "AZ900-ARCH-004",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe subscriptions",

        question:
            "Which Azure construct acts as a boundary for billing and " +
            "resource management?",

        options: [

            "Subscription",

            "Availability zone",

            "Network interface",

            "DNS record"

        ],

        answer:
            [0],

        explanation:
            "Azure subscriptions provide billing and management boundaries."

    },


    {

        id:
            "AZ900-ARCH-005",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe management groups",

        question:
            "You need to apply governance across several Azure " +
            "subscriptions. Which hierarchy level should you consider?",

        options: [

            "Management group",

            "Network interface",

            "Public IP address",

            "Availability set"

        ],

        answer:
            [0],

        explanation:
            "Management groups organize subscriptions and allow governance " +
            "controls to be inherited."

    },


    {

        id:
            "AZ900-ARCH-006",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure Virtual Machines",

        question:
            "Which Azure service provides general-purpose virtualized " +
            "Windows and Linux computers?",

        options: [

            "Azure Virtual Machines",

            "Azure DNS",

            "Microsoft Purview",

            "Azure Policy"

        ],

        answer:
            [0],

        explanation:
            "Azure Virtual Machines provide IaaS-based virtual computers."

    },


    {

        id:
            "AZ900-ARCH-007",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Virtual Machine Scale Sets",

        question:
            "Which service is designed to deploy and manage a group " +
            "of similar virtual machines that can scale automatically?",

        options: [

            "Virtual Machine Scale Sets",

            "Azure Files",

            "Azure Policy",

            "Azure Cost Management"

        ],

        answer:
            [0],

        explanation:
            "VM Scale Sets manage groups of VM instances and support autoscaling."

    },


    {

        id:
            "AZ900-ARCH-008",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe containers",

        question:
            "What is a common benefit of containers compared with " +
            "traditional virtual machines?",

        options: [

            "They package applications with dependencies while sharing the host OS kernel.",

            "They always require a separate full operating system per application.",

            "They cannot run in the cloud.",

            "They replace networking."

        ],

        answer:
            [0],

        explanation:
            "Containers package applications and dependencies while " +
            "sharing the host operating-system kernel."

    },


    {

        id:
            "AZ900-ARCH-009",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure Functions",

        question:
            "Which Azure service is designed to run event-driven code " +
            "without requiring developers to manage servers?",

        options: [

            "Azure Functions",

            "Azure Virtual Network",

            "Azure Files",

            "Azure DNS"

        ],

        answer:
            [0],

        explanation:
            "Azure Functions is a serverless compute service."

    },


    {

        id:
            "AZ900-ARCH-010",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure Virtual Network",

        question:
            "What is the primary purpose of an Azure virtual network?",

        options: [

            "Provide private network connectivity for Azure resources.",

            "Store encryption keys.",

            "Manage legal discovery.",

            "Calculate Azure costs."

        ],

        answer:
            [0],

        explanation:
            "Azure Virtual Network provides network isolation and connectivity " +
            "for Azure resources."

    },


    {

        id:
            "AZ900-ARCH-011",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe VNet peering",

        question:
            "Which feature connects two Azure virtual networks privately " +
            "over Microsoft's backbone?",

        options: [

            "Virtual network peering",

            "Azure Policy",

            "Resource locks",

            "Azure Advisor"

        ],

        answer:
            [0],

        explanation:
            "VNet peering provides private connectivity between virtual networks."

    },


    {

        id:
            "AZ900-ARCH-012",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe VPN Gateway and ExpressRoute",

        question:
            "Which Azure connectivity option provides a private " +
            "dedicated connection between on-premises infrastructure " +
            "and Microsoft cloud services without traversing the public internet?",

        options: [

            "ExpressRoute",

            "Public IP address",

            "Azure DNS",

            "Storage Explorer"

        ],

        answer:
            [0],

        explanation:
            "ExpressRoute provides private connectivity between customer " +
            "networks and Microsoft cloud services."

    },


    {

        id:
            "AZ900-ARCH-013",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure Blob Storage",

        question:
            "Which Azure Storage service is designed primarily for " +
            "large amounts of unstructured object data?",

        options: [

            "Blob Storage",

            "Azure Files only",

            "Azure DNS",

            "Azure Monitor"

        ],

        answer:
            [0],

        explanation:
            "Blob Storage is designed for unstructured object data."

    },


    {

        id:
            "AZ900-ARCH-014",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure Files",

        question:
            "Which Azure Storage service provides managed file shares " +
            "that can be accessed using SMB?",

        options: [

            "Azure Files",

            "Azure Queue Storage",

            "Azure Table Storage",

            "Azure Functions"

        ],

        answer:
            [0],

        explanation:
            "Azure Files provides managed cloud file shares."

    },


    {

        id:
            "AZ900-ARCH-015",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe storage redundancy",

        question:
            "Which storage redundancy option replicates data across " +
            "multiple availability zones in the same Azure region?",

        options: [

            "ZRS",

            "LRS",

            "GRS only",

            "Archive tier"

        ],

        answer:
            [0],

        explanation:
            "Zone-redundant storage replicates data across availability zones."

    },


    {

        id:
            "AZ900-ARCH-016",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Microsoft Entra ID",

        question:
            "Which Azure service provides cloud identity and access " +
            "management for users and applications?",

        options: [

            "Microsoft Entra ID",

            "Azure Files",

            "Azure Load Balancer",

            "Azure Data Box"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra ID provides identity and access management."

    },


    {

        id:
            "AZ900-ARCH-017",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe multifactor authentication",

        question:
            "A user enters a password and then approves the sign-in " +
            "using Microsoft Authenticator. Which security capability " +
            "is being used?",

        options: [

            "Multifactor authentication",

            "Single sign-on only",

            "Azure Storage encryption",

            "Virtual network peering"

        ],

        answer:
            [0],

        explanation:
            "MFA uses multiple authentication factors to verify identity."

    },


    {

        id:
            "AZ900-ARCH-018",

        domain:
            "architecture",

        type:
            "single",

        objective:
            "Describe Azure RBAC",

        question:
            "What is the primary purpose of Azure role-based access control?",

        options: [

            "Control who can perform actions on Azure resources.",

            "Replicate storage between regions.",

            "Protect applications from DDoS attacks only.",

            "Calculate estimated Azure pricing."

        ],

        answer:
            [0],

        explanation:
            "Azure RBAC controls authorization to Azure resources based " +
            "on roles and scopes."

    },


    {

        id:
            "AZ900-ARCH-019",

        domain:
            "architecture",

        type:
            "multi",

        objective:
            "Describe identity and security",

        question:
            "Which TWO are identity-related Azure security capabilities?",

        options: [

            "Conditional Access",

            "Microsoft Entra ID",

            "AzCopy",

            "Azure Data Box"

        ],

        answer:
            [0, 1],

        explanation:
            "Microsoft Entra ID provides identity services and Conditional " +
            "Access applies contextual access controls."

    },



    /*
     * ========================================================
     * DOMAIN 3
     * AZURE MANAGEMENT AND GOVERNANCE
     * 17 QUESTIONS
     * ========================================================
     */


    {

        id:
            "AZ900-GOV-001",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure pricing factors",

        question:
            "Which factor can directly affect the cost of an Azure resource?",

        options: [

            "Resource type and consumption.",

            "The user's desktop wallpaper.",

            "The number of browser bookmarks.",

            "The colour of the Azure portal theme."

        ],

        answer:
            [0],

        explanation:
            "Azure costs are affected by factors such as resource type, " +
            "usage, region and pricing model."

    },


    {

        id:
            "AZ900-GOV-002",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Pricing Calculator",

        question:
            "Which tool helps estimate the expected cost of planned " +
            "Azure resources before deployment?",

        options: [

            "Azure Pricing Calculator",

            "Azure Activity Log",

            "Azure Bastion",

            "Microsoft Sentinel"

        ],

        answer:
            [0],

        explanation:
            "The Azure Pricing Calculator estimates anticipated resource costs."

    },


    {

        id:
            "AZ900-GOV-003",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Cost Management",

        question:
            "Which Azure capability helps organisations analyse spending " +
            "and create budgets?",

        options: [

            "Azure Cost Management",

            "Azure DNS",

            "Azure Functions",

            "Azure Files"

        ],

        answer:
            [0],

        explanation:
            "Azure Cost Management provides cost analysis, budgeting " +
            "and related financial governance capabilities."

    },


    {

        id:
            "AZ900-GOV-004",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe tags",

        question:
            "What is a common use for Azure resource tags?",

        options: [

            "Associate metadata such as cost centre or environment with resources.",

            "Provide physical datacenter redundancy.",

            "Encrypt every network packet.",

            "Replace subscriptions."

        ],

        answer:
            [0],

        explanation:
            "Tags attach metadata to Azure resources for organisation, " +
            "reporting and cost-management scenarios."

    },


    {

        id:
            "AZ900-GOV-005",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Policy",

        question:
            "Which service is designed to evaluate and enforce " +
            "organisational standards across Azure resources?",

        options: [

            "Azure Policy",

            "Azure DNS",

            "Azure Functions",

            "Azure Data Box"

        ],

        answer:
            [0],

        explanation:
            "Azure Policy evaluates resources against governance rules " +
            "and can enforce supported requirements."

    },


    {

        id:
            "AZ900-GOV-006",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe resource locks",

        question:
            "Which Azure feature can help prevent accidental deletion " +
            "of a critical resource?",

        options: [

            "Resource lock",

            "Azure Monitor alert",

            "Azure DNS record",

            "Azure Pricing Calculator"

        ],

        answer:
            [0],

        explanation:
            "Resource locks can prevent accidental deletion or modification."

    },


    {

        id:
            "AZ900-GOV-007",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Microsoft Purview",

        question:
            "Which Microsoft service provides capabilities for data " +
            "governance, discovery and compliance across organisational data?",

        options: [

            "Microsoft Purview",

            "Azure Bastion",

            "Azure Functions",

            "Azure VPN Gateway"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Purview provides data governance and compliance capabilities."

    },


    {

        id:
            "AZ900-GOV-008",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure portal",

        question:
            "What is the Azure portal?",

        options: [

            "A browser-based interface for managing Azure resources.",

            "A physical datacenter.",

            "A storage redundancy option.",

            "A virtual network protocol."

        ],

        answer:
            [0],

        explanation:
            "The Azure portal provides a graphical browser-based management interface."

    },


    {

        id:
            "AZ900-GOV-009",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Cloud Shell",

        question:
            "Which browser-based Azure tool provides authenticated access " +
            "to command-line environments such as Azure CLI and PowerShell?",

        options: [

            "Azure Cloud Shell",

            "Azure Advisor",

            "Azure Data Box",

            "Microsoft Purview"

        ],

        answer:
            [0],

        explanation:
            "Azure Cloud Shell provides browser-accessible command-line shells."

    },


    {

        id:
            "AZ900-GOV-010",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure CLI",

        question:
            "Which tool provides a cross-platform command-line interface " +
            "for managing Azure resources?",

        options: [

            "Azure CLI",

            "Azure Storage Explorer only",

            "Microsoft Word",

            "Windows Event Viewer only"

        ],

        answer:
            [0],

        explanation:
            "Azure CLI is Microsoft's cross-platform Azure command-line tool."

    },


    {

        id:
            "AZ900-GOV-011",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe infrastructure as code",

        question:
            "What is a major benefit of infrastructure as code?",

        options: [

            "Infrastructure can be deployed consistently using versionable definitions.",

            "Infrastructure must be configured manually every time.",

            "It prevents all human errors automatically.",

            "It removes the need for permissions."

        ],

        answer:
            [0],

        explanation:
            "Infrastructure as code makes infrastructure definitions " +
            "repeatable, consistent and suitable for version control."

    },


    {

        id:
            "AZ900-GOV-012",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe ARM templates",

        question:
            "What is the purpose of an Azure Resource Manager template?",

        options: [

            "Declaratively define Azure resources for repeatable deployment.",

            "Provide physical datacenter cooling.",

            "Perform user authentication only.",

            "Replace Microsoft Entra ID."

        ],

        answer:
            [0],

        explanation:
            "ARM templates define Azure infrastructure declaratively."

    },


    {

        id:
            "AZ900-GOV-013",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Arc",

        question:
            "Which service extends Azure management and governance " +
            "capabilities to supported resources outside Azure?",

        options: [

            "Azure Arc",

            "Azure Files",

            "Azure DNS",

            "Azure Front Door"

        ],

        answer:
            [0],

        explanation:
            "Azure Arc extends Azure management to supported hybrid " +
            "and multicloud resources."

    },


    {

        id:
            "AZ900-GOV-014",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Advisor",

        question:
            "Which service provides recommendations to improve cost, " +
            "reliability, security and performance of Azure resources?",

        options: [

            "Azure Advisor",

            "Azure DNS",

            "Azure Files",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Azure Advisor analyzes resource configuration and usage " +
            "and provides optimization recommendations."

    },


    {

        id:
            "AZ900-GOV-015",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Service Health",

        question:
            "Which service informs customers about Azure service issues, " +
            "planned maintenance and health events that may affect them?",

        options: [

            "Azure Service Health",

            "Azure Key Vault",

            "Azure Files",

            "Azure Pricing Calculator"

        ],

        answer:
            [0],

        explanation:
            "Azure Service Health provides personalized information " +
            "about service incidents and maintenance."

    },


    {

        id:
            "AZ900-GOV-016",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Describe Azure Monitor",

        question:
            "Which Azure service collects and analyzes telemetry from " +
            "applications and infrastructure?",

        options: [

            "Azure Monitor",

            "Azure DNS",

            "Azure Resource Lock",

            "Azure Pricing Calculator"

        ],

        answer:
            [0],

        explanation:
            "Azure Monitor provides centralized observability for Azure resources."

    },


    {

        id:
            "AZ900-GOV-017",

        domain:
            "governance",

        type:
            "multi",

        objective:
            "Describe Azure Monitor capabilities",

        question:
            "Which TWO are Azure Monitor capabilities?",

        options: [

            "Log Analytics",

            "Azure Monitor alerts",

            "Azure subscriptions",

            "Management groups"

        ],

        answer:
            [0, 1],

        explanation:
            "Log Analytics and alerting are core Azure Monitor capabilities."

    }

];



/*
 * ============================================================
 * RUNTIME VALIDATION
 * ============================================================
 */


(function validateAZ900QuestionBank() {


    const domainCounts = {

        cloud:
            0,

        architecture:
            0,

        governance:
            0

    };


    const ids =
        new Set();


    /*
     * ========================================================
     * TOTAL COUNT
     * ========================================================
     */


    if (
        AZ900_QUESTIONS.length !==
        AZ900_EXAM.questionCount
    ) {

        throw new Error(

            "AZ-900 question-bank error: expected " +
            AZ900_EXAM.questionCount +
            " questions but found " +
            AZ900_QUESTIONS.length +
            "."

        );

    }


    /*
     * ========================================================
     * QUESTION VALIDATION
     * ========================================================
     */


    AZ900_QUESTIONS.forEach(
        (question) => {


            if (
                !question.id ||
                typeof question.id !==
                "string"
            ) {

                throw new Error(
                    "AZ-900 question-bank error: invalid question ID."
                );

            }


            if (
                ids.has(
                    question.id
                )
            ) {

                throw new Error(

                    "AZ-900 question-bank error: duplicate ID " +
                    question.id

                );

            }


            ids.add(
                question.id
            );


            if (
                !Object.prototype.hasOwnProperty.call(
                    AZ900_EXAM.domains,
                    question.domain
                )
            ) {

                throw new Error(

                    "AZ-900 question-bank error: unknown domain " +
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

                    "AZ-900 question-bank error: unsupported type on " +
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

                    "AZ-900 question-bank error: invalid options on " +
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

                    "AZ-900 question-bank error: missing answer on " +
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

                    "AZ-900 question-bank error: single-answer question " +
                    question.id +
                    " has multiple correct answers."

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

                            "AZ-900 question-bank error: invalid answer index on " +
                            question.id

                        );

                    }

                }
            );

        }
    );


    /*
     * ========================================================
     * DOMAIN WEIGHT VALIDATION
     * ========================================================
     */


    Object.entries(
        AZ900_EXAM.domains
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

                    "AZ-900 weighting error for " +
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
                    AZ900_EXAM.questionCount
                ) *
                100;


            if (
                percentage <
                domain.minWeight ||
                percentage >
                domain.maxWeight
            ) {

                throw new Error(

                    "AZ-900 weighting error: " +
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
        "[365in5] AZ-900 question bank validated."
    );


    console.info(
        "[365in5] AZ-900 weighting:",
        domainCounts
    );


})();



/*
 * ============================================================
 * EXPOSE TO GENERIC SIMULATOR
 * ============================================================
 */


window.EXAM_CONFIG =
    AZ900_EXAM;


window.EXAM_QUESTIONS =
    AZ900_QUESTIONS;
